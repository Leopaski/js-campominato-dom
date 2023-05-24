const tabella = document.getElementById('tabella');
function createCell(className){
    const cell=document.createElement('div'); 
   	cell.classList.add(className); 
    return cell;
}
const play=document.getElementById('play');
play.addEventListener('click',function(){
    tabella.innerHTML="";
    for (i=0;i<100;i++){
        tabella.appendChild(createCell("cella"));
        const cellElement=document.querySelector('.cella')
cellElement.addEventListener('click',function(){

cellElement.classList.toggle('clicked') } 
)
}})



function getRandomUniqueNumber( minNum, maxNum, elements ){
    const numbersList = [];

    if ( (maxNum - minNum) < elements ){
        return [];
    }

    while (numbersList.length < elements){
        const newRandomNumber = getRandomInt(minNum, maxNum);
        if (!numbersList.includes(newRandomNumber)){
            numbersList.push(newRandomNumber);
        }
    }

    return numbersList;
}
console.log(getRandomUniqueNumber( 1, 100, 16 ))



function getRandomInt(min, max){
    const randomNumber = Math.floor( Math.random() * ( max - min +1) + min);
    return randomNumber;
}

