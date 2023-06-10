const formEl = document.getElementsByClassName('form');
const inputEl = document.getElementById("input")
const BtnEl = document.getElementById("btn")
const ulEl = document.getElementById("ul");

let inputDeger = "";

BtnEl.addEventListener("click", (e) => {
e.preventDefault();
inputDeger =  inputEl.value;


if ( inputDeger.trim() == ""){
      alert("Please enter To Do...!")
}

inputEl.value = "";

liAndToDo()
localStorage.setItem("todoList" , inputDeger )

})

window.addEventListener("load", () => {
      localStorage.getItem(inputDeger)
      // liAndToDo()
})


function liAndToDo(){
const liEl = document.createElement("li")
liEl.classList.add("li")


const icon = document.createElement("i")
icon.setAttribute("class", "fas fa-check");
liEl.appendChild(icon)

const p =  document.createElement("p")
p.innerText = inputDeger;
liEl.appendChild(p);

const removeIcon = document.createElement("i")
removeIcon.setAttribute("class", "fas fa-trash");
liEl.append(removeIcon)

ulEl.appendChild(liEl)
} 


ulEl.addEventListener("click", (e) => {

      if(e.target.classList.contains("fa-check")){
e.target.parentElement.classList.toggle("checked")

    }else if(e.target.classList.contains("fa-trash")){
      e.target.parentElement.remove();
   
    }
})