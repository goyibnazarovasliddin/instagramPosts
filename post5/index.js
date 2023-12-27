let temp = 0;
function hoverOver() {
    let items = document.querySelector('.hamburger-menu');
    let removeItems = ``;
    removeItems = `
        <div class="menu" onclick="hoverOver()">
            <div class="lines"></div>
            <div class="lines"></div>
            <div class="lines"></div>
        </div> 
    `;

    let addItems = ``;
    addItems += `
        <div class="menu-items">
            <div class="icon p1">
                <div class="firstDiv" onmouseenter="detailHover1()" onmouseleave="detailUnhover1()">
                    <i class='bx bx-home-alt-2 iconN'></i>
                </div>
                <div class="pointer"></div>
            </div>
            <div class="icon p2">
                <div class="firstDiv" onmouseenter="detailHover2()" onmouseleave="detailUnhover2()">
                    <i class='bx bxl-html5 iconN'></i>
                </div>
                <div class="pointer"></div>
            </div>
            <div class="icon p3">
                <div class="firstDiv" onmouseenter="detailHover3()" onmouseleave="detailUnhover3()">
                    <i class='bx bxl-css3 iconN' ></i>
                </div>
                <div class="pointer"></div>
            </div>
            <div class="icon p4">
                <div class="firstDiv" onmouseenter="detailHover4()" onmouseleave="detailUnhover4()">
                    <i class='bx bxl-javascript iconN' ></i>
                </div>
                <div class="pointer"></div>
            </div>
            <div class="icon p5">
                <div class="firstDiv" onmouseenter="detailHover5()" onmouseleave="detailUnhover5()">
                    <i class='bx bxl-vuejs iconN' ></i>
                </div>
                <div class="pointer"></div>
            </div>
            <div class="icon p6">
                <div class="firstDiv" onmouseenter="detailHover6()" onmouseleave="detailUnhover6()">
                    <i class='bx bxl-nodejs iconN' ></i>
                </div>
                <div class="pointer"></div>
            </div>
        </div>
    `;
    if (temp % 2 == 0) {
        items.innerHTML += addItems;
        const menu = document.querySelector('.menu');
        menu.classList.add('clickedMenu');

        temp++;
    } else {
        items.innerHTML = removeItems;

        temp++;
    }
}

let i1 = 0;
let j1 = 0;
function detailHover1() {
    let addItems = ``;
    addItems = `
        <div class="aboutPointer">
            Options
        </div>
    `;
    let iconsDetail = document.querySelector('.p1');

    if (i1 === 0) {
        iconsDetail.innerHTML += addItems;
        i1++;
        j1 = 0;
    }
}

function detailUnhover1() {
    let removeItems = ``
    removeItems = `
        <div class="firstDiv" onmouseenter="detailHover1()" onmouseleave="detailUnhover1()">
            <i class='bx bx-home-alt-2 iconN'></i>
        </div>
        <div class="pointer"></div>
    `
    let iconUnhoverDetails = document.querySelector('.p1');
    
    if (j1 === 0) {
        iconUnhoverDetails.innerHTML = removeItems;

        j1++;
        i1 = 0;
    }
}

let i2 = 0;
let j2 = 0
function detailHover2() {
    let addItems = ``;
    addItems = `
        <div class="aboutPointer">
            Options
        </div>
    `;

    const point = document.querySelector('.pointer');
    point.classList.add('points');
    let iconsDetail = document.querySelector('.p2');

    if (i2 === 0) {
        iconsDetail.innerHTML += addItems;
        i2++;
        j2 = 0;
    }
}

function detailUnhover2() {
    let removeItems = ``
    removeItems = `
        <div class="firstDiv" onmouseenter="detailHover2()" onmouseleave="detailUnhover2()">
            <i class='bx bxl-html5 iconN'></i>
        </div>
        <div class="pointer"></div>
    `
    let iconUnhoverDetails = document.querySelector('.p2');
    
    if (j2 === 0) {
        iconUnhoverDetails.innerHTML = removeItems;

        j2++;
        i2 = 0;
    }
}

let i3 = 0;
let j3 = 0
function detailHover3() {
    let addItems = ``;
    addItems = `
        <div class="aboutPointer">
            Options
        </div>
    `;
    let iconsDetail = document.querySelector('.p3');

    if (i3 === 0) {
        iconsDetail.innerHTML += addItems;
        i3++;
        j3 = 0;
    }
}

function detailUnhover3() {
    let removeItems = ``
    removeItems = `
        <div class="firstDiv" onmouseenter="detailHover3()" onmouseleave="detailUnhover3()">
            <i class='bx bxl-css3 iconN' ></i>
        </div>
        <div class="pointer"></div>
    `
    let iconUnhoverDetails = document.querySelector('.p3');
    
    if (j3 === 0) {
        iconUnhoverDetails.innerHTML = removeItems;

        j3++;
        i3 = 0;
    }
}

let i4 = 0;
let j4 = 0;
function detailHover4() {
    let addItems = ``;
    addItems = `
        <div class="aboutPointer">
            Options
        </div>
    `;
    let iconsDetail = document.querySelector('.p4');

    if (i4 === 0) {
        iconsDetail.innerHTML += addItems;
        i4++;
        j4 = 0;
    }
}

function detailUnhover4() {
    let removeItems = ``
    removeItems = `
        <div class="firstDiv" onmouseenter="detailHover4()" onmouseleave="detailUnhover4()">
            <i class='bx bxl-javascript iconN' ></i>
        </div>
        <div class="pointer"></div>
    `
    let iconUnhoverDetails = document.querySelector('.p4');
    
    if (j4 === 0) {
        iconUnhoverDetails.innerHTML = removeItems;

        j4++;
        i4 = 0;
    }
}

let i5 = 0;
let j5 = 0;
function detailHover5() {
    let addItems = ``;
    addItems = `
        <div class="aboutPointer">
            Options
        </div>
    `;
    let iconsDetail = document.querySelector('.p5');

    if (i5 === 0) {
        iconsDetail.innerHTML += addItems;
        i5++;
        j5 = 0;
    }
}

function detailUnhover5() {
    let removeItems = ``
    removeItems = `
        <div class="firstDiv" onmouseenter="detailHover5()" onmouseleave="detailUnhover5()">
            <i class='bx bxl-vuejs iconN' ></i>
        </div>
        <div class="pointer"></div>
    `
    let iconUnhoverDetails = document.querySelector('.p5');
    
    if (j5 === 0) {
        iconUnhoverDetails.innerHTML = removeItems;

        j5++;
        i5 = 0;
    }
}

let i6 = 0;
let j6 = 0;
function detailHover6() {
    let addItems = ``;
    addItems = `
        <div class="aboutPointer">
            Options
        </div>
    `;
    let iconsDetail = document.querySelector('.p6');

    if (i6 === 0) {
        iconsDetail.innerHTML += addItems;
        i6++;
        j6 = 0;
    }
}

function detailUnhover6() {
    let removeItems = ``
    removeItems = `
        <div class="firstDiv" onmouseenter="detailHover6()" onmouseleave="detailUnhover6()">
            <i class='bx bxl-nodejs iconN' ></i>
        </div>
        <div class="pointer"></div>
    `
    let iconUnhoverDetails = document.querySelector('.p6');
    
    if (j6 === 0) {
        iconUnhoverDetails.innerHTML = removeItems;

        j6++;
        i6 = 0;
    }
}