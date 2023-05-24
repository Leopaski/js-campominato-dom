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
    } 
})
