function creategrid(){
    const container = document.querySelector('#container');
    for (i=0; i<16; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = "25%";
        box.style.height = "25%";
        container.appendChild(box);
    };
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



creategrid();