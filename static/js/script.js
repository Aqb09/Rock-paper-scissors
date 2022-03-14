//Challenge 1 
function ageInDays() {
    var birthyear = prompt("what year were you born?");
    var ageInDayss = (2022- birthyear) *365;
    var h1 = document.createElement('h1');// <h1></h1>
    var textAnswer = document.createTextNode('You are' + ageInDayss + 'days');
    h1.setAttribute('id','ageInDays'); //<h1 id = ageInDays> <h1>
    h1.appendChild(textAnswer); //<h1 id = ageInDays > textAnswer </h1>
    document.getElementById('flex-box-result').appendChild(h1); //<div><h1 id = ageInDays > textAnswer </h1></div>
    console.log(ageInDayss);
}

function reset(){
    document.getElementById('ageInDays').remove();
}