// Smooth scroll untuk navigasi
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(link);
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
  //input tugas//
  const taskInput = document.getElementById("taskInput");  
  const addTaskBtn = document.getElementById("addTaskBtn");  
  const taskList = document.getElementById("taskList");  
  
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];  
  
  function renderTasks() {  
      taskList.innerHTML = "";  
      tasks.forEach((task, index) => {  
          const li = document.createElement("li");  
          li.innerHTML = `  
              <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">  
              <span class="${task.completed ? "completed" : ""}">${task.name}</span>  
              <button class="edit-btn" onclick="editTask(${index})">Edit</button>  
              <button class="delete-btn" onclick="deleteTask(${index})">Hapus</button>  
          `;  
          taskList.appendChild(li);  
      });  
  }  
  
  function addTask() {  
      const taskName = taskInput.value.trim();  
      if (taskName) {  
          tasks.push({name: taskName, completed: false});  
          taskInput.value = "";  
          saveTasks();  
          renderTasks();  
      }  
  }  
  
  function toggleTask(index) {  
      tasks[index].completed = !tasks[index].completed;  
      saveTasks();  
      renderTasks();  
  }  
  
  function editTask(index) {  
      const newTaskName = prompt("Edit tugas:", tasks[index].name);  
      if (newTaskName !== null && newTaskName.trim() !== "") {  
          tasks[index].name = newTaskName.trim();  
          saveTasks();  
          renderTasks();  
      }  
  }  
  
  function deleteTask(index) {  
      tasks.splice(index, 1);  
      saveTasks();  
      renderTasks();  
  }  
  
  function saveTasks() {  
      localStorage.setItem("tasks", JSON.stringify(tasks));  
  }  
  
  addTaskBtn.addEventListener("click", addTask);  
  renderTasks(); 