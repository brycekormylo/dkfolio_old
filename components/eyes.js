
document.addEventListener('mousemove', (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();

    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg);

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

function eyeBuilder() {

    const eyes = document.createElement('span');
    eyes.setAttribute('id', 'anchor');
    eyes.innerHTML = /*html*/`
        <div class="circle"><img class="eye" src="assets/eye.png"></div>
        <div class="circle"><img class="eye" src="assets/eye.png"></div>
    `
    document.getElementById('submit-button').appendChild(eyes);
}

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}