const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);


//type of events
// create task
// create btn - click +++

// add events:
//update task
//checkbox - click/change -
// list - click +++

// handlers:
//
//validation first
//choose correct tool

function onCreateTask() {
  const taskInputEl = document.querySelector(".task-input");
  const taskText = taskInputEl.value;
  if (!taskInputEl.value) {
  return;
  }
    const newTask = { text: taskText, done: false };
    tasks.push(newTask);
    taskInputEl.value = '';
    
    renderTasks(tasks);
  
}
const createBtnEl = document.querySelector('.create-task-btn');
createBtnEl.addEventListener('click', onCreateTask);

//change task - algo
//1. if not checkbox - end function
//2. find by id
//3. update task

//onUpdateTaskHandler - good name of func changeStatus
const changeStatus = event => {
//validate

  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const foundedTask = tasks.find(task => task.id === checkbox.dataset.id);
  foundedTask.done = checkbox.checked;
    // foundedTask.done = !foundedTask.done;

  renderTasks(tasks);
};

inputButtonElem.addEventListener('click', createNewTask);
listElem.addEventListener('click', changeStatus);