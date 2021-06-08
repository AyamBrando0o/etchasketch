colorchosen = 'black';
numberofsquares = 1;
slider = document.getElementById("myRange");

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

function pixelSize(){
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    document.querySelector('h2').innerHTML = slider.value;
    creategrid(slider.value);
}

function restart(){
    elements = document.getElementsByClassName('box');
    for (i = 0, length = elements.length; i < length; i++) {
        elements[i].style.backgroundColor = 'white';         
    }
}

function addclass(target){
    buttons = document.getElementsByClassName("button");
    for (i=0; i<buttons.length; i++){
        buttons[i].classList.remove('active');
    }
    target.classList.add("active");
}

function getOption(){
    buttons = document.getElementsByClassName("button");
    for (i=1; i<buttons.length; i++){
        if(buttons[i].classList.contains("active")){
            return (buttons[i].id);
        }
    }
}
function rainbow(e){
    red = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            if (e.target.className == 'box'){
                e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
            };
}
function greyscale(e){
    white = "rgb(255, 255, 255)";
            bright_gray = "rgb(238, 238, 238)";
            chinese_silver = "rgb(204, 204, 204)";
            spanish_gray = "rgb(153, 153, 153)";
            granite_gray = "rgb(102, 102, 102)";
            dark_charcoal = "rgb(51, 51, 51)";
            black = "rgb(0, 0, 0)" ;
            if (e.target.className == 'box'){
                if(getComputedStyle(e.target).backgroundColor == white){
                    e.target.style.backgroundColor = bright_gray;
                }
                else if(e.target.style.backgroundColor == bright_gray){
                    e.target.style.backgroundColor = chinese_silver;
                }
                else if(e.target.style.backgroundColor == chinese_silver){
                    e.target.style.backgroundColor = spanish_gray;
                }
                else if(e.target.style.backgroundColor == spanish_gray){
                    e.target.style.backgroundColor = granite_gray;
                }
                else if(e.target.style.backgroundColor == granite_gray){
                    e.target.style.backgroundColor = dark_charcoal;
                }
                else if(e.target.style.backgroundColor == dark_charcoal){
                    e.target.style.backgroundColor = black;
                }
                else if(e.target.style.backgroundColor == black){
                }
                else e.target.style.backgroundColor = white;
        };

}

function eraser(e){
    if (e.target.className == 'box'){
        e.target.style.backgroundColor = "white";
    };
}

function color(e){
    const colorpicker = document.getElementById("choosecolor");
    colorpicker.addEventListener("input", usercolorchosen, false);
    colorpicker.addEventListener("change", usercolorchosen, false);
    if (e.target.className == 'box'){
        e.target.style.backgroundColor = colorchosen;
    };
}

function usercolorchosen(e){
    colorchosen = e.target.value;
}

getgridsize();
//slider.addEventListener('mouseup', pixelSize);
document.onmouseover = function(e){
    switch(getOption()){
        case "rainbow":
            rainbow(e);
            break;

        case "color":
            color(e);
            break;

        case "greyscale":
            greyscale(e);
            break;

        case "eraser":
            eraser(e);
            break;

    }
} 