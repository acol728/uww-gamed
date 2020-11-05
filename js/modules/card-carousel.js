export default class CardCarousel {
    static scrolls = 0;
    static INC = 280;

    static scrollRight() {
        if (this.scrolls * -1 + window.innerWidth > document.getElementById('featured-cards').offsetWidth - this.INC)
            this.scrolls -= this.INC;
        else
            this.scrolls -= this.INC * 2;
        document.getElementById('featured-cards').style.transform = `translateX(${this.scrolls}px)`;
        document.getElementById('card-left-button').style.visibility = 'visible';
        if (this.scrolls * -1 + window.innerWidth > document.getElementById('featured-cards').offsetWidth)
            document.getElementById('card-right-button').style.visibility = 'hidden';
    }

    static scrollLeft() {
        if (this.scrolls < 0) {
            this.scrolls += this.INC * 2;
            if (this.scrolls > 0) {
                document.getElementById('featured-cards').style.transform = `translateX(${0}px)`;
                this.scrolls = 0;
            }
            else
                document.getElementById('featured-cards').style.transform = `translateX(${this.scrolls}px)`;
        }
        if (this.scrolls === 0)
            document.getElementById('card-left-button').style.visibility = 'hidden';
        document.getElementById('card-right-button').style.visibility = 'visible';
    }
}