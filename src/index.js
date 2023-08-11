document.addEventListener("DOMContentLoaded", () => {
 let form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(e.target.new_task_description.value)
    form.reset()
 })
});

function buildTask(newTask) {
  let p = document.createElement('p');
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${newTask} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#new_task_description').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove()
}