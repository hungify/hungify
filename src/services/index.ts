import { Quote } from "~/interfaces";

export async function fetchQuote(): Promise<Quote> {
  const response = await fetch("https://stoic.tekloon.net/stoic-quote");
  return response.json();
}
