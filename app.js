let gameseq = [];
let userseq = [];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow","red","purple","green"];



document.addEventListener("keypress", function()
{   if (start == false){
    
    start = true ; 
    levelup();
}
})



function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}
// random btn 
function levelup(){
    userseq = [];
    level++;
    
    h2.innerText= `Level ${level}`;
    let ranind = Math.floor(Math.random() * 3);
    let randcolor = btns[ranind];
    let randombtn = document.querySelector(`.${randcolor}`);
    btnflash(randombtn); 
    gameseq.push(randcolor);
    
}
function checkans(ind){
    
    if (userseq[ind]==gameseq[ind]){
        if(userseq.length == gameseq.length){
        setTimeout(levelup, 1000);
        }
    }
    else{
        h2.innerText= `Game Over Score ${level - 1} Press any key to try again !`;
        reset();
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        },150);
    }

}
function btnpress(){
    btnflash(this);
    let btn = this ;
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq= [];
    start = false;
    userseq= [];
    level = 0 ;
}

