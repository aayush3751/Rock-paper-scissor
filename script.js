let userScore=0;
let compScore=0;
const user=document.querySelector("#YOU");
const comp=document.querySelector("#COMP");
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const genCompChoice =() =>{
    const  options=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return options[index];
};
const showWinner =(userWin,compChoice,userChoice) =>{
    if(userWin===true)
    {
        userScore++;
        user.innerText=userScore;
        msg.innerText=`you won! ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor="green";
        console.log("you won");
    }
    else
    {
        compScore++;
         comp.innerText=compScore;
       
        msg.innerText=`you loose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        console.log("you loose");
    }
};
const playGame=(userChoice) =>{
    console.log("choice is ",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice==compChoice)
    {
        console.log("game is draw");
        msg.innerText=" Game Draw !play again ";
        msg.style.backgroundColor="white";
        msg.style.color="black";
    }
    else
    {
        let userWin=true;

        if(userChoice==="rock")
        {
                //comp win in paper and user in scisssor
               userWin= compChoice==="paper"?false:true;
        }

        else if(userChoice==="paper")
        {
            //comp win in scissor and user in rock
            userWin=compChoice==="scissor"?false:true;
        }

        else if(userChoice==="scissor")
        {
            //comp win in rock and user in papaer
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin ,compChoice ,userChoice)
        
    }
    
    
};
choices.forEach((choice)  =>{
    choice.addEventListener("click" ,() =>{
         const userChoice=choice.getAttribute("id");
         console.log("button clicked");
         playGame(userChoice);
    });
   
    

});


