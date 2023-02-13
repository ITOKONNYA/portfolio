class BackgroundParallax {
    constructor() {
        this.background = document.getElementById('background');
        this.backgroundHeight = 1440;
    }

    activate() {
        window.addEventListener('resize', () => {
            this.alterStyle();
        });
        window.addEventListener('scroll', () => {
            this.alterStyle();
        });
    }

    alterStyle() {
        this.documentHeight = document.documentElement.scrollHeight;
        this.screenHeight = document.documentElement.clientHeight;
        this.scrollTop = document.documentElement.scrollTop;
        this.background.style.top = this.scrollTop * (this.screenHeight - this.backgroundHeight) / (this.documentHeight - this.screenHeight) + 'px';
    }
}

const backgroundParallax = new BackgroundParallax();
backgroundParallax.activate();