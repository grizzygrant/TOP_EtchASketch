const getRandomColor = () => {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};
const gridWidth = 16;
const gridSize = gridWidth ** 2;
const container = document.querySelector('#container');
for (i = 1; i <= gridSize; i++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', `gridSquare${i}`);
    newDiv.setAttribute('class', `gridSquare`);
    container.appendChild(newDiv);
    newDiv.addEventListener('mouseenter', () => {
        const color = getRandomColor();
        newDiv.style.background = color;
    });
    //newDiv.addEventListener('mouseleave', () => {
    //    newDiv.style.background = '';
    //})
}