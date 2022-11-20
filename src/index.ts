import { TYPING_EFFECT } from "./constants/index";
import { fetchQuote } from "./services/index";
import { getVietnameseDate } from "./utils/index";
import { write } from "bun";

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

    await write("README.md", quoteToday);

    console.log("Generated quote today successfully!. Check README.md");
  } catch (error) {
    console.log(error);
  }
};

makeQuote();
