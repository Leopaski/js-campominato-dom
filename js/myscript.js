const tabella = document.getElementById('tabella');
function createCell(className){
    const cell=document.createElement('div'); 
   	cell.classList.add(className); 
    return cell;
}
for (i=0;i<100;i++){
    tabella.appendChild(createCell("cella")); 
}