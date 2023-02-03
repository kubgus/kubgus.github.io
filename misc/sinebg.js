const canvas = document.querySelector('canvas#sine');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Wave {
    constructor(
        canv,
        maxAmplitude = 100,
        length = 100,
        frequency = 8,
        bgOpacity = 0.03,
        y,
    ) {
        this.canvas = canv;
        this.ctx = this.canvas.getContext('2d');
        this.maxAmplitude = maxAmplitude;
        this.amplitude = 0;
        this.length = length;
        this.frequency = frequency;
        this.increment = Math.random() * 360;
        this.bgOpacity = bgOpacity;
        this.y = y || this.canvas.height / 2;

        this.frameCallback = () => {
            this.draw(this.ctx);
            requestAnimationFrame(this.frameCallback);
        };
    }

    draw(c) {
        c.beginPath();

        this.ctx.fillStyle = `rgba(0,0,0,${this.bgOpacity})`;
        this.ctx.strokeStyle = `hsl(${this.increment * 20}, 80%, 70%)`;

        c.fillRect(0, 0, this.canvas.width, this.canvas.height);

        c.moveTo(0, this.canvas.height / 2);

        for (let i = 0; i < this.canvas.width; i += 1) {
            c.lineTo(
                i,
                this.y + Math.sin(i / this.length + this.increment) * this.amplitude,
            );
        }

        c.stroke();
        c.closePath();

        this.amplitude = Math.sin(this.increment) * this.maxAmplitude;
        this.increment -= this.frequency / 1000;
    }

    animate() {
        this.frameCallback();
    }
}

const wave = new Wave(canvas, 150, 200, -8, 0.07);

wave.animate();

// FADE OUT BACKGROUND WITH SCROLL
window.addEventListener("scroll", fadeWaveOnScroll);
fadeWaveOnScroll();
function fadeWaveOnScroll() {
    const stats = document.getElementById("stats_s");
    const statsMiddlePos = getPosition(stats).top - stats.offsetHeight / 2;
    const opacity = scrollY < statsMiddlePos ? scrollY / statsMiddlePos : 1.4 - scrollY / statsMiddlePos;
    canvas.style.opacity = opacity * 0.3;
}

// GET EL POS
function getPosition(el) {
    var x = 0;
    var y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: y, left: x };
}