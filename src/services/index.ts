import { Quote } from "~/interfaces";

export async function fetchQuote(): Promise<Quote> {
  const response = await fetch("https://api.quotable.io/random");
  return await response.json();
}
