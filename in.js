const addbutton=document.querySelector('.addbutton');
var input=document.querySelector('.input');
const container=document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName)
    }
    createDiv(itemName){
        let input=document.createElement('input');
        input.value=itemName;
        
        input.disabled=true;
        
        input.classList.add('item_input');
        input.type="text";

        let itemBox=document.createElement('div');
        itemBox.classList.add('item');

        let removebutton =document.createElement('button');
        removebutton.innerHTML="delete";
        removebutton.classList.add('removebutton');

        let editbutton =document.createElement('button');
        editbutton.innerHTML="edit";
        editbutton.classList.add('editbutton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(removebutton);
        itemBox.appendChild(editbutton);
        

        
        editbutton.addEventListener('click',()=>this.edit(input));
        removebutton.addEventListener('click',()=>this.remove(itemBox));

    }
    
   
    edit(input){
        input.disabled=!input.disabled;
    }
    
    remove(item){
        container.removeChild(item);
    }
}

function check(){
    if(input.value !==""){
        new item(input.value);
        input.value="";
    }
}
addbutton.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if(e.which==13){
        check();
    }
})