export default class ReleaseDate {
    year;
    month;
    day;

    constructor(date) {
        [this.year, this.month, this.day] = date.split("-");
    }

    compare(date) {
        if (this.year == date.year)
            if (this.month == date.month)
                if (this.day == date.day)
                    return 0;
                else
                    return (this.day < date.day) ? 1 : -1;
            else
                return (this.month < date.month) ? 1 : -1;
        else
            return (this.year < date.year) ? 1 : -1;
    }

    toString() {
        const date = "" + this.month + "-" + this.day + "-" + this.year;
        return date;
    }
}