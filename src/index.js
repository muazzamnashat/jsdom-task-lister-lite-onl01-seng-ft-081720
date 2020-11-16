document.addEventListener("DOMContentLoaded", () => {
  // your code here



  document.getElementById("create-task-form").addEventListener("submit",function(event) {
    let newLi = document.createElement('li');
    let button = document.createElement('button');
    let new_select= document.createElement("select");
    let taskName= document.getElementById('new-task-description').value;
    newLi.id = `${taskName}-li`; 
    newLi.textContent = taskName;


    button.innerHTML = "X";
    button.onclick = () => {
      button.parentNode.remove();
    }

    new_select.id = `${taskName}-select`;
    new_select.appendChild(new Option("High", "Red"));
    new_select.appendChild(new Option("Medium", "Yellow"));
    new_select.appendChild(new Option("Low", "Green"));

    newLi.appendChild(button);
    newLi.appendChild(new_select);

    document.querySelector("ul#tasks").appendChild(newLi);

    if (new_select.value == 'Red') {
      newLi.style.color = "red";
    } else if (new_select.value == 'Yellow'){
      newLi.style.color = "yellow";
    }
  
    event.preventDefault();
  },false);

  

});

