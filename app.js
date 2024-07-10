let userscore= 0;
let compscore = 0;
const body = document.body;
const  uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

const drawgame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game is Draw";
    body.style.backgroundColor = "brown"

    
}


const showwinner = (userwin, userchoice, compchoice)=>{
    if(userwin == true){
        userscore++;
        uscore.innerText = userscore;
        console.log("User is the winner");
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`
        body.style.backgroundColor = "lightgreen"
     
        
    }
    else{
        compscore++;
        cscore.innerText = compscore;
        console.log("computer is the winner");
        msg.innerText = `Computer win! Computer ${compchoice} beats ${userchoice}`
        body.style.backgroundColor = "red"

       

    }
}

const playgame = (userchoice) =>{
    console.log("user choice= ",userchoice);

    const compchoice = gencompchoice()
    console.log("computer choice = ",compchoice);

    if(userchoice == compchoice){
        drawgame();

    }else{
        let userwin = true;
        if(userchoice == "rock"){

            userwin= compchoice === "paper" ? false : true;
        }
        else if(userchoice == "paper"){
            userwin= compchoice === "scissors" ? false : true;

        }

        else {
            userwin= compchoice === "rock" ? false : true;

        }
        showwinner(userwin ,userchoice, compchoice);
    }

     
     


}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        //console.log("choice is clicked",userchoice);
        playgame(userchoice);
    });
});