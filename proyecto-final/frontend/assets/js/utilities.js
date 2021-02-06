function createDate() {
  var hoy = new Date();
  var fechaHora = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear() + ' ' + hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
  return fechaHora;
}

function consecutive() {
  return (localStorage.getItem('tareas') && localStorage.getItem('tareas') != "[]") ?
    JSON.parse(localStorage.getItem('tareas'))[JSON.parse(localStorage.getItem('tareas')).length - 1].id + 1 :
    1
}