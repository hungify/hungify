import fs from "fs";
import fetch from "node-fetch";
import { QUOTE_END_POINT, TYPING_EFFECT, VISITOR_COUNT } from "./constants";
import type { Quote } from "./interfaces";
import { getVietnameseDate } from "./utils";

const totalVisitor = `<p align='center'><img src='${VISITOR_COUNT}'></p>`;
const greetingEffect = `[![Typing SVG](${TYPING_EFFECT})](https://git.io/typing-svg)`;
const images = `![RobotDance](src/assets/images/robot-dancing-dribble.gif?style=center)`;

async function fetchQuote(url: string): Promise<Quote> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Cannot fetch quote");
  }
  return (await response.json()) as Quote;
}

const makeQuote = async () => {
  try {
    const quote = await fetchQuote(QUOTE_END_POINT);
    const content = quote?.content;
    const author = quote?.author ? quote.author : "Anonymous";

    const today = getVietnameseDate(new Date());
    const quoteToday = `${totalVisitor} \n\n${greetingEffect} \n _Quote Today (${today})_\n___\n>**_${content}_**\n___\n\n## __**_${author}_**\n\n${images}\n`;

    fs.writeFileSync("README.md", quoteToday);
  } catch (error) {
    console.log(error);
  }
};

makeQuote();
