function ageof() {
    let age =prompt ('What year were you born?') ;
    let ageInMonths= (2022-age); 
    let h1= document.createElement('h1');
    let textResult= document.createTextNode('You are' +' '+ ageInMonths +' '+ 'years old !!');
    h1.setAttribute('id','ageof');
    h1.appendChild(textResult);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageof);
}

function redo() {
    document.getElementById('ageof').remove();
}

//Challenge 3 RPS

function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    
    humanChoice= yourChoice.id;
    botChoice= numberToChoice(randToRpsInt());
    console.log(botChoice);
    results= decideWinner(humanChoice, botChoice);
    console.log(results); 
    message = finalMessage(results);
    console.log(message); 

    rpsFrontEnd(yourChoice.id, botChoice, message);
    
}


function randToRpsInt() {

    return Math.floor(Math.random()* 3);
    
}

function numberToChoice(number) {
    return['rock','paper','scissors'][number]
    
}

function decideWinner(yourChoice, computerChoice) {

    let rpsDatabase ={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0},
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];
    
    return[yourScore,computerScore];


}

function finalMessage([yourScore, computerScore]) {

    if(yourScore===0){
        return{'message': 'You LOST!!', 'color':'red'};
    }else if(yourScore===0.5){
        return{'message': 'You TIED!!' , 'color':'yellow'};
    }else{
        return{'message': 'You WON!!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
 

    

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv=document.createElement('div');
    let botDiv=document.createElement('div');
    let messageDiv=document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    
    
}