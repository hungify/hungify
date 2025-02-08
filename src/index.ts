import {
  fetchQuote,
  getTodayDateFormat,
  GREENTING_EFFECT_URL,
  HERO_DANCE_URL,
} from "./shared";

const makeQuote = async () => {
  try {
    const { quote, author } = await fetchQuote();
    const newAuthor = author ?? "Anonymous";

    const today = getTodayDateFormat();
    const quoteTime = `_Quote Today (${today})_\n___\n`;
    const quoteFormat = `>**_${quote}_**\n___\n\n`;
    const authorFormat = `## __**_${newAuthor}_**\n\n`;

    const quoteToday = `${GREENTING_EFFECT_URL} \n${quoteTime}${quoteFormat}${authorFormat}${HERO_DANCE_URL}\n`;

    await Bun.write("README.md", quoteToday);
  } catch (error) {
    console.error("Error:", error);
  }
};

makeQuote();
