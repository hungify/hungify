import { writeFile } from 'fs/promises'
import { QUOTE_END_POINT, TYPING_EFFECT } from "./constants";
import type { Quote } from "./interfaces";
import { fetchData, getVietnameseDate } from "./utils";

const greetingEffect = `[![Typing SVG](${TYPING_EFFECT})](https://git.io/typing-svg)`;
const images = `![RobotDance](src/assets/images/robot-dancing-dribble.gif?style=center)`;

const makeQuote = async () => {
  try {
    const { content, author } = await fetchData<Quote>(QUOTE_END_POINT);
    const newAuthor = author ?? "Anonymous";

    const today = getVietnameseDate(new Date());
    const quoteToday = `${greetingEffect} \n _Quote Today (${today})_\n___\n>**_${content}_**\n___\n\n## __**_${newAuthor}_**\n\n${images}\n`;

    await writeFile("README.md", quoteToday);
  } catch (error) {
    console.log(error);
  }
};

makeQuote();
