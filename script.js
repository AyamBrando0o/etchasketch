function creategrid(){
    const container = document.querySelector('#container');
    for (i=0; i<16; i++){
        const box = document.createElement('div');
        box.id='box';
        box.style.width = "25%";
        box.style.height = "25%";
        container.appendChild(box);
    };
}

document.onmouseover = function(e){
    if (e.target.id == 'box'){
        e.target.classList.add('hovered');
    }
}

creategrid();