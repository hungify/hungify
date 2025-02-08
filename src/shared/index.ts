import type { Quote } from "~/types";

const HERO_DANCE_PATH = "src/assets/images/robot-dancing-dribble.gif";
const TYPING_EFFECT_URL = `https://readme-typing-svg.herokuapp.com?font=Press+Start+2P&color=C2F784&size=35&width=900&height=100&lines=Hello+World%2C+I'm+Hung+!`;

export const GREENTING_EFFECT_URL = `[![Typing SVG](${TYPING_EFFECT_URL})](https://git.io/typing-svg)`;
export const HERO_DANCE_URL = `![RobotDance](${HERO_DANCE_PATH}?style=center)`;

export const getTodayDateFormat = () => {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return formatter.format(date);
};

export async function fetchQuote(): Promise<Quote> {
  const response = await fetch("https://stoic.tekloon.net/stoic-quote");
  const json = (await response.json()) as { data: Quote };
  return json.data;
}
