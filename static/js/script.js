const addButton=document.getElementById("add")
const minhasTarefas=document.getElementById("minhasTarefas")
const listInput=document.getElementById("u")

function removeElement(event){
    const taskToDelete=event.target.previousSibling.innerText
    console.log("a remover o elemento", event.target.previousSibling.innerText)

    let tarefasSalvas=JSON.parse(localStorage.getItem("tarefas")) || [];
  //filtra um array com base numa condicao

const tarefasRestantes=tarefasSalvas.filter((task)=>task!==taskToDelete)
 localStorage.setItem("tarefas" , JSON.stringify(tarefasRestantes))
 document.location.reload()
   
}
 let tarefasSalvas=JSON.parse(localStorage.getItem("tarefas")) || [];
 tarefasSalvas.forEach(task => {
    const newList=document.createElement("div")
    const removeBtn=document.createElement("button")
    const taskElement=document.createElement("span")
    removeBtn.innerText="remover"
    removeBtn.addEventListener("click", removeElement)
    taskElement.innerText=task


//cria uma niva classe  que contem o txt da tarefa e um botao que remove
    newList.classList.add("list")
    newList.appendChild(taskElement )
    newList.appendChild(removeBtn)
   
    minhasTarefas.appendChild(newList)
 
 });
addButton.addEventListener("click", function(){
    
    if(!listInput.value){
        alert('Digite uma tarefa para inserir')
        return
    }else{
    console.log("Tarefa adicionada")
    const newList=document.createElement("div")
    const removeBtn=document.createElement("button")
    const task=document.createElement("span")
    removeBtn.innerText="remover"
    removeBtn.addEventListener("click", removeElement)
    task.innerText=listInput.value

    newList.classList.add("list")
    newList.appendChild(task )
    newList.appendChild(removeBtn)
    listInput.value=""
    minhasTarefas.appendChild(newList)

     let tarefasSalvas=JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefasSalvas.push(task.innerText)
     
 
 localStorage.setItem("tarefas" , JSON.stringify(tarefasSalvas))
   

   
    
    }
 })
