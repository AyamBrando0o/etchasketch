function creategrid(width){
    const container = document.querySelector('#container');
    no_of_squares = width * width;
    size = 100/width;
    for (i=0; i<no_of_squares; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = size + "%";
        box.style.height = size + "%";
        container.appendChild(box);
    };
}

function getgridsize(){
    size = prompt("Enter size of desired square");
    while (size>100 || size <0){
        size = prompt("Enter size of desired square");
    }
    creategrid(size);
}

function addclass(target){
    buttons = document.getElementsByClassName("button");
    /*for (i=0; i<buttons.length; i++){
        console.log(buttons[i]);
        buttons[i].classList.remove("active");
    }*/
    document.getElementById("rainbow").classList.remove("active");
    document.getElementById("color").classList.remove("active");
    document.getElementById("greyscale").classList.remove("active");
    document.getElementById("eraser").classList.remove("active");
    target.classList.add("active");

}

function button(){
    elements = document.getElementsByClassName('box');

    for (i = 0, length = elements.length; i < length; i++) {
        elements[i].style.backgroundColor = 'black';         
        
    }
}

getgridsize();

document.onmouseover = function(e){

    red = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    if (e.target.className == 'box'){
        e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    }
} 