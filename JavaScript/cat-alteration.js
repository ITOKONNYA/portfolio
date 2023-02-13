class CatAlteration {
    constructor() {
        this.cat = document.getElementById('cat');
        this.actionPoints = new Array(document.getElementsByClassName('cat-action-point').length);
        for (let i = 0; i < this.actionPoints.length; i ++) {
            this.actionPoints[i] = document.getElementsByClassName('cat-action-point')[i];
        }
        this.catState = new Array(
            'opened', 
            'closed',
            'hidden'
        );
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
        for (let i = 0; i < this.actionPoints.length; i ++) {
            if (this.actionPoints[i].getBoundingClientRect().top > this.cat.getBoundingClientRect().bottom) {
                this.cat.classList.remove(...this.cat.classList);
                this.cat.classList.add(this.catState[i]);
                break;
            } else {
                ;
            }
        }
    }
}

const catAlteration = new CatAlteration();
catAlteration.activate();