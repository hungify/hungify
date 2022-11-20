import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TYPING_EFFECT } from "./constants";
import { fetchQuote } from "./services";
import { getVietnameseDate } from "./utils";

global.__dirname = path.dirname(fileURLToPath(import.meta.url));

const makeQuote = async () => {
  const greetingEffect = `[![Typing SVG](${TYPING_EFFECT})](https://git.io/typing-svg)`;
  const heroDance = `![RobotDance](src/assets/images/robot-dancing-dribble.gif?style=center)`;
  const endpoint = "https://api.quotable.io/random";
  try {
    const { content, author } = await fetchQuote(endpoint);
    const newAuthor = author ?? "Anonymous";

    const today = getVietnameseDate(new Date());
    const greeting = `${greetingEffect} \n`;
    const quoteTime = `_Quote Today (${today})_\n___\n`;
    const quoteContent = `>**_${content}_**\n___\n\n`;
    const currentAuthor = `## __**_${newAuthor}_**\n\n`;
    const hero = `${heroDance}\n`;

    const quoteToday = `${greeting}${quoteTime}${quoteContent}${currentAuthor}${hero}`;

    const writable = createWriteStream(path.join(__dirname, "README.md"));

    writable.write(quoteToday);

    console.log("Generated quote today successfully!. Check README.md");
  } catch (error) {
    console.log(error);
  }
};

makeQuote();
