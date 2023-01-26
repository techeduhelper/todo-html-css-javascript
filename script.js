function addTask() {
    // Get the task input
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value;
    // switch(task){
    //     case taskInput=0:
    //     addTask();
    //     break;
    // }
  
    // Create a new li element
    var li = document.createElement("li");
    li.className = "task";
  
    // Create a new span element
    var span = document.createElement("span");
    span.innerHTML = task;
  
    // Create a new delete button element
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = deleteTask;
  
    //Create a new edit button element
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.onclick = editTask;
  
    // Add the task and delete button to the li element
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
  
    // Add the li element to the task list
    var taskList = document.getElementById("taskList");
    taskList.appendChild(li);
  
    // Clear the task input
    taskInput.value = "";
  }
  
  function deleteTask(e) {
    var task = e.target.parentElement;
    var taskList = task.parentElement;
    taskList.removeChild(task);
  }
  
  function editTask(e){
      var task = e.target.parentElement;
      var input = document.createElement("input");
      input.type = "text";
      input.value = task.firstChild.innerHTML;
      task.replaceChild(input, task.firstChild);
      e.target.innerHTML = "Save";
      e.target.onclick = saveTask;
}
      
      function saveTask(e) {
      var task = e.target.parentElement;
      var input = task.firstChild;
      var span = document.createElement("span");
      span.innerHTML = input.value;
      task.replaceChild(span, input);
      e.target.innerHTML = "Edit";
      e.target.onclick = editTask;
} 
 