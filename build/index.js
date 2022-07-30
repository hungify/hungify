import fs from 'fs';
import fetch from 'node-fetch';
import { QUOTE_END_POINT, TYPING_EFFECT, VISITOR_COUNT } from './constants';
import { getFullDate } from './utils';
const totalVisitor = `<p align='center'><img src='${VISITOR_COUNT}'></p>`;
const greetingEffect = `[![Typing SVG](${TYPING_EFFECT})](https://git.io/typing-svg)`;
const images = `![RobotDance](src/assets/images/robot-dancing-dribble.gif?style=center)`;
async function fetchQuote(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return (await response.json());
        }
        else {
            return Promise.reject(new Error('Failed to fetch quote'));
        }
    }
    catch (error) {
        return Promise.reject(error);
    }
}
const makeQuote = async () => {
    try {
        const quote = await fetchQuote(QUOTE_END_POINT);
        const content = quote?.content;
        const author = quote?.author ? quote.author : 'Anonymous';
        const today = getFullDate(new Date());
        const quoteOfDay = `${totalVisitor} \n\n${greetingEffect} \n _Quote of the Day (${today})_\n___\n>**_${content}_**\n___\n\n## __**_${author}_**\n\n${images}`;
        fs.writeFileSync('README.md', quoteOfDay);
    }
    catch (error) {
        console.log(error);
    }
};
makeQuote();
//# sourceMappingURL=index.js.map