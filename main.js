function sel(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}


function scissor(){  
    document.getElementById("comp").style.display="block";
    if (sel(1,4)==1){
        document.getElementById("comp").src="stone.png";
        document.getElementById("muthu").innerHTML="Lost";
        document.getElementById("muthu").style.color="rgb(94, 37, 37)";

    }
    else if (sel(1,4)==2){
        document.getElementById("comp").src="paper.png";
        document.getElementById("muthu").innerHTML="Won";
        document.getElementById("muthu").style.color="rgb(31, 177, 97)";

    }
    else if (sel(1,4)==3){
        document.getElementById("comp").src="scissors.png";
        document.getElementById("muthu").innerHTML="Tie";
        document.getElementById("muthu").style.color="rgb(0, 0, 0)";

    }
}

function paper(){
    document.getElementById("comp").style.display="block";
    if (sel(1,4)==1){
        document.getElementById("comp").src="stone.png";
        document.getElementById("muthu").innerHTML="Won";
        document.getElementById("muthu").style.color="rgb(31, 177, 97)";
    }
    else if (sel(1,4)==2){
        document.getElementById("comp").src="paper.png";
        document.getElementById("muthu").innerHTML="Tie";
        document.getElementById("muthu").style.color="rgb(0, 0, 0)";

    }
    else if (sel(1,4)==3){
        document.getElementById("comp").src="scissors.png";
        document.getElementById("muthu").innerHTML="Lost";
        document.getElementById("muthu").style.color="rgb(94, 37, 37)";

    }

}
function stone(){
    document.getElementById("comp").style.display="block";
    if (sel(1,4)==1){
        document.getElementById("comp").src="stone.png";
        document.getElementById("muthu").innerHTML="Tie";
        document.getElementById("muthu").style.color="rgb(0, 0, 0)";
    }
    else if (sel(1,4)==2){
        document.getElementById("comp").src="paper.png";
        document.getElementById("muthu").innerHTML="Lost";
        document.getElementById("muthu").style.color="rgb(94, 37, 37)";

    }
    else if (sel(1,4)==3){
        document.getElementById("comp").src="scissors.png";
        document.getElementById("muthu").innerHTML="Won";
        document.getElementById("muthu").style.color="rgb(31, 177, 97)";

    }
}
