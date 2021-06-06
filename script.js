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

document.onmouseover = function(e){
    if (e.target.className == 'box'){
        e.target.classList.add('hovered');
    }
}

function button(){
    elements = document.getElementsByClassName('box');

    for (i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.remove('hovered');         
        
    }
}


getgridsize();