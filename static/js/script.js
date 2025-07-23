/*window.onload=function (){
    const addButton=document.getElementById("add");
    const minhasTarefas=document.getElementById("minhasTarefas");
    const listInput=document.getElementById("u");

    if (!addButton || !minhasTarefas || !listInput){
        console.warn("nenhum elemento foi encontrado!");
    }

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
    removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
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
 });
 };*/
 window.onload = function () {
    const addButton = document.getElementById("add");
    const minhasTarefas = document.getElementById("minhasTarefas");
    const listInput = document.getElementById("u");

    if (!addButton || !minhasTarefas || !listInput) {
        console.warn("Algum elemento não foi encontrado!");
        return;
    }

    function removeElement(event) {
        const taskToDelete = event.target.closest("button").previousSibling.innerText;
        console.log("Removendo o elemento:", taskToDelete);

        let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
        const tarefasRestantes = tarefasSalvas.filter((task) => task !== taskToDelete);
        localStorage.setItem("tarefas", JSON.stringify(tarefasRestantes));
        document.location.reload();
    }

    function addTask() {
        if (!listInput.value.trim()) {
            alert('Digite uma tarefa para inserir');
            return;
        }

        const newList = document.createElement("div");
        const removeBtn = document.createElement("button");
        const task = document.createElement("span");

        // Ícone de lixeira
        removeBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        `;
        removeBtn.addEventListener("click", removeElement);

        task.innerText = listInput.value;
        newList.classList.add("list");
        newList.appendChild(task);
        newList.appendChild(removeBtn);
        listInput.value = "";
        minhasTarefas.appendChild(newList);

        let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
        tarefasSalvas.push(task.innerText);
        localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
    }

    // Adiciona tarefas salvas
    let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefasSalvas.forEach(task => {
        const newList = document.createElement("div");
        const removeBtn = document.createElement("button");
        const taskElement = document.createElement("span");

        taskElement.innerText = task;

        // Botão com ícone de lixeira
        removeBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-trash" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M8 6v14h8V6"/>
                <path d="M10 10v6"/>
                <path d="M14 10v6"/>
                <path d="M5 6l1-2h12l1 2"/>
            </svg>
        `;
        removeBtn.addEventListener("click", removeElement);

        newList.classList.add("list");
        newList.appendChild(taskElement);
        newList.appendChild(removeBtn);
        minhasTarefas.appendChild(newList);
    });

   
    addButton.addEventListener("click", addTask);

    listInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
};

