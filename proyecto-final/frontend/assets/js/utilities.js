//Return a string with current date:  dd/mm/aaaa  hh:mm:ss
const createDate = () => {
  var hoy = new Date();
  var fechaHora = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear() + ' ' + hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
  return fechaHora;
}

//Return the consecutive ID for a new task
const consecutive = () => {
  //Check if we have tasks, true= obtain last id task + 1 || false= assign ID = 1
  return (localStorage.getItem('tareas') && localStorage.getItem('tareas') != "[]") ?
    JSON.parse(localStorage.getItem('tareas'))[JSON.parse(localStorage.getItem('tareas')).length - 1].id + 1 :
    1
}

//Show/Hide modals
const toggleModal = (id, action) => {
  if (!id) return;
  switch (action) {
    case 'open':
      //assing class 'show' to apply css styles in the selected modal
      document.getElementById(id).classList = 'showModal';
      document.body.style.overflow = 'hidden';
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

      break;
    case 'hide':
      //assing class 'hide' to apply css styles in the selected modal
      document.getElementById(id).classList = 'hideModal';
      document.getElementById('editTaskInputError').classList = 'hideError'; //Remove error message
      document.body.style.overflow = '';
      break;
  }
}