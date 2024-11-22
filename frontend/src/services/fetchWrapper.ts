interface Fetch {
  endpoint: string;
  isServer: boolean;
}

export interface Response {
  ok: boolean;
  status: number;
  data?: object;
  error?: string;
}

export const FETCH = async ({
  endpoint,
  isServer = true,
}: Fetch): Promise<Response> => {
  const baseURL: string = isServer
    ? "http://backend:8000"
    : "http://localhost:8000";

  try {
    const response = await fetch(`${baseURL}${endpoint}`);

    const { status } = response;

    if (response.ok) {
      const data = await response.json();
      return { ok: true, status, data };
    }

    return {
      ok: false,
      status,
      error: `Error ${status}`,
    };
  } catch (err) {
    return { ok: false, status: -1, error: `Error: ${err}` };
  }
};
