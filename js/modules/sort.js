import games from "../data/games.js";
import ReleaseDate from "./release-date.js";

export default class Sort {
    static sortAlphabetical(mult) {
        const sorted = [...games];
        sorted.sort((a, b) => {
            return mult * a.title.localeCompare(b.title);
        });
        return sorted;
    }
    
    static sortDate(mult) {
        const sorted = [...games];
        sorted.sort((a, b) => {
            const date = new ReleaseDate(a.releaseDate);
            return mult * date.compare(new ReleaseDate(b.releaseDate));
        });
        return sorted;
    }
}