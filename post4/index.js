let snowing = document.getElementById('snowing');
let count = 50;
for(var i = 0; i < 200; i++){
    let leftSnow = Math.floor(Math.random() * 4000);
    let topSnow = Math.floor(Math.random());
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 4) + 5);
    let blurSnow = Math.floor(Math.random() * 10);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    snowing.appendChild(div);
}