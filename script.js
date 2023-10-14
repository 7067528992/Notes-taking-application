const notesContainer=document.querySelector(".notes");
const Createbtn=document.querySelector(".btn");
let input=document.querySelectorAll(".input-box");
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
Createbtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
     else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(element => {
            element.onkeyup=function(){
                updateStorage();
            }
        });
     }
})