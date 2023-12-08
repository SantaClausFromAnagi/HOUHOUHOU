let card = document.getElementById("card");
let greeting = document.getElementById("greeting");
let cardBody = document.getElementById("cardBody");

let tr = false



card.addEventListener("click", ()=>{
    if(tr == false){
        card.className += "flip-horizontal-bottom";
        greeting.style.display = "none";
        cardBody.style.display = "flex";
        tr = true;
    }else{
        // card.className += "flip-horizontal-bottom";
        // greeting.style.display = "flex";
        // cardBody.style.display = "none";
        // tr = true;
    }
})




