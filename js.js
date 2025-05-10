buttons = document.querySelectorAll('.buttons');
button1 = document.querySelector('.button1');
button2 = document.querySelector('.button2');
button3 = document.querySelector('.button3');
button4 = document.querySelector('.button4');
button5 = document.querySelector('.button5');
button6 = document.querySelector('.button6');
button7 = document.querySelector('.button7');
button_go = document.querySelector('.go');
type_buttons = document.querySelector('.type-buttons');
color_buttons = document.querySelector('.color-buttons');

green_dr = document.querySelector('.green_dr');
green_wy = document.querySelector('.green_wy');
green_lo = document.querySelector('.green_lo');
green_gi = document.querySelector('.green_gi');

blue_dr = document.querySelector('.blue_dr');
blue_wy = document.querySelector('.blue_wy');
blue_lo = document.querySelector('.blue_lo');
blue_gi = document.querySelector('.blue_gi');

red_dr = document.querySelector('.red_dr');
red_wy = document.querySelector('.red_wy');
red_lo = document.querySelector('.red_lo');
red_gi = document.querySelector('.red_gi');

h2_dragon = document.querySelector('.h2_dragon');
complete = document.querySelector('.complete');
light = document.querySelector('.light');
dark = document.querySelector('.dark');
body = document.body;

let button_question4 = document.querySelector('.button_question4')

let selectedType = 'dragon';
let selectedColor = 'red';

const titleImage = document.querySelector('.title-image');

document.querySelector('.button1').addEventListener('click', () => {
    selectedType = 'dragon';
    updateImage();
});

document.querySelector('.button2').addEventListener('click', () => {
    selectedType = 'wyvern';
    updateImage();
});

document.querySelector('.button3').addEventListener('click', () => {
    selectedType = 'long';
    updateImage();
});

document.querySelector('.button4').addEventListener('click', () => {
    selectedType = 'gidra';
    updateImage();
});

document.querySelector('.button5').addEventListener('click', () => {
    selectedColor = 'red';
    updateImage();
});

document.querySelector('.button6').addEventListener('click', () => {
    selectedColor = 'green';
    updateImage();
});

document.querySelector('.button7').addEventListener('click', () => {
    selectedColor = 'blue';
    updateImage();
});

function updateImage() {
    titleImage.src = `${selectedColor}${selectedType}.jpg`;
}

button_go.addEventListener('click', function() {
    type_buttons.style.display = 'none';
    color_buttons.style.display = 'flex';
    h2_dragon.innerHTML = 'Виберіть колір';
    button_go.style.display = 'none'
})

complete.addEventListener('click', () => {
    setTimeout(() => {
        color_buttons.style.display = 'none';
        button_go.style.display = 'none';
        complete.style.display = 'none';
        h2_dragon.innerHTML = 'Дракон Готовий';
    }, 100);
});

dark.addEventListener('click', function () {
    dark.style.opacity = 0;
    dark.style.pointerEvents = 'none';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    light.style.opacity = 1;
    light.style.pointerEvents = 'auto';
});

// Ввімкнення темної теми
light.addEventListener('click', function () {
    light.style.opacity = 0;
    light.style.pointerEvents = 'none';
    body.style.backgroundColor = '#121212';
    body.style.color = '#CCCCCC';
    dark.style.opacity = 1;
    dark.style.pointerEvents = 'auto';
});

function Question() {
    let input1 = document.querySelector('.inp_question1');
    if (input1.value == "Виверн") {
        input1.style.border = "10px solid rgb(0, 255, 38)"
        window.location.href = "test2.html";
    } else {
        alert("Неправильне слово!");
        input1.style.border = '3px solid red';
    }
};

function Question2() {
    let input2 = document.querySelector('.inp_question2');
    if (input2.value == "Лун") {
        input2.style.border = "10px solid rgb(0, 255, 38)"
        window.location.href = "test3.html";
    } else {
        alert("Неправильне слово!");
        input2.style.border = '3px solid red';
    }
};

function Question3() {
    let input3 = document.querySelector('.inp_question3');
    if (input3.value == "Звичайний") {
        input3.style.border = "10px solid rgb(0, 255, 38)"
        window.location.href = "test4.html";
    } else {
        alert("Неправильне слово!");
        input3.style.border = '3px solid red';
    }
};

function Question4() {
    let input4 = document.querySelector('.inp_question4');
    if (input4.value == "Гідра") {
        input4.style.border = "10px solid rgb(0, 255, 38)"
        window.location.href = "index.html";
    } else {
        alert("Неправильне слово!");
        input4.style.border = '3px solid red';
    }
};

function Test() {
        window.location.href = "test.html"
}
