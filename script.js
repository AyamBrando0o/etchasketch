function creategrid(){
    const container = document.querySelector('#container');
    for (i=0; i<16; i++){
        const box = document.createElement('div');
        box.id='box';
        box.style.width = "25%";
        box.style.height = "25%";
        container.appendChild(box);
    }

    //document.getElementsByID("box").style.height = "50px";
    //document.getElementsByID("box").style.width = "50px";
}

creategrid();