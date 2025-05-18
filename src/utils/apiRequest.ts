import fetch from 'cross-fetch';

export class ApiRequest {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(baseUrl: string, headers?: Record<string, string>) {
    this.baseUrl = baseUrl;

    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    this.headers = headers ? { ...defaultHeaders, ...headers } : defaultHeaders;
  }

  getParamUrl(paramObj: Record<string, string | number | boolean>) {
    const params = Object.fromEntries(
      Object.entries(paramObj).map(([key, value]) => [key, String(value)]),
    );
    return new URLSearchParams(params).toString();
  }

  async get<T>(endpoint: string, headers: Record<string, string> = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const options = {
      method: 'GET',
      headers: { ...this.headers, ...headers },
    };

    try {
      const response = await fetch(url, options);

      if (response.status !== 200) {
        const errorBody = (await response.json().catch(() => ({}))) as Record<
          string,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          any
        >;
        const errorMessage =
          errorBody?.message || `GET request failed with status: ${response.status}`;
        throw new ApiRequestError(errorMessage, response.status, errorBody);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      throw new Error(`Error in GET request: ${(error as Error).message}`);
    }
  }

  async post<T>(
    endpoint: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any,
    headers: Record<string, string> = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const options = {
      method: 'POST',
      headers: { ...this.headers, ...headers },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(url, options);

      if (response.status !== 201 && response.status !== 200) {
        const errorBody = (await response.json().catch(() => ({}))) as Record<
          string,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          any
        >;
        const errorMessage =
          errorBody?.message || `POST request failed with status: ${response.status}`;
        throw new ApiRequestError(errorMessage, response.status, errorBody);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      throw new Error(`Error in POST request: ${(error as Error).message}`);
    }
  }
}

export class ApiRequestError extends Error {
  statusCode: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, statusCode: number, body: any) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.body = body;
    Error.captureStackTrace(this, this.constructor);
  }
}
