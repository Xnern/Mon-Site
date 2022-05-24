const div = document.querySelector('article');

const h3 = document.querySelector('h3');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

click = 1;

div.addEventListener("click", () => {
    if (click === 1) {
        click= 2;
        h3.innerText = "Mon expérience"; 
        div.style.backgroundColor = "rgb(40, 174, 102)"; 
        p1.innerText = "Bon";
        c2.style.backgroundColor = "black";
        c1.style.backgroundColor = "white";
    }
    else if(click === 2){
        h3.innerText = "Qui suis-je ?";
        click= 3;
        div.style.backgroundColor = "rgb(113, 165, 222)"; 
        c3.style.backgroundColor = "black";
        c2.style.backgroundColor = "white";
    }
    else if(click === 3){
        h3.innerText = "Qui suis-je ?";
        click= 1;
        div.style.backgroundColor = "rgb(113, 165, 222)"; 
        c1.style.backgroundColor = "black";
        c3.style.backgroundColor = "white";
    }

});
