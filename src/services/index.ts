import { ResponseJsonByEndpoint } from "~/interfaces/index";

export async function fetchQuote<Endpoint extends keyof ResponseJsonByEndpoint>(
  endpoint: Endpoint
): Promise<ResponseJsonByEndpoint[Endpoint]> {
  const response = await fetch(endpoint);
  return await response.json();
}
