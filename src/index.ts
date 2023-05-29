import { TYPING_EFFECT } from "./constants";
import { fetchQuote } from "./services";
import { getVietnameseDate } from "./utils";

const makeQuote = async () => {
  const greetingEffect = `[![Typing SVG](${TYPING_EFFECT})](https://git.io/typing-svg)`;
  const heroDance = `![RobotDance](src/assets/images/robot-dancing-dribble.gif?style=center)`;

  try {
    const { content, author } = await fetchQuote();
    const newAuthor = author ?? "Anonymous";

    const today = getVietnameseDate(new Date());
    const greeting = `${greetingEffect} \n`;
    const quoteTime = `_Quote Today (${today})_\n___\n`;
    const quoteContent = `>**_${content}_**\n___\n\n`;
    const currentAuthor = `## __**_${newAuthor}_**\n\n`;
    const hero = `${heroDance}\n`;

    const quoteToday = `${greeting}${quoteTime}${quoteContent}${currentAuthor}${hero}`;

    await Bun.write("README.md", quoteToday);

    console.log("Generated quote today successfully!. \nCheck README.md");
  } catch (error) {
    console.log(error);
  }
};

makeQuote();
