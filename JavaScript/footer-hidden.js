class FooterHidden {
    constructor() {
        this.footer = document.getElementById('footer');
        this.actionPoint = document.getElementById('footer-action-point');
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
        this.screenBottom = document.documentElement.clientHeight;
        if (this.screenBottom < this.actionPoint.getBoundingClientRect().top) {
            this.footer.style.display = 'none';
        } else {
            this.footer.style.display = 'block';
        }
    }
}

const footerHidden = new FooterHidden();
footerHidden.activate();