function addNote(event){
    event.preventDefault();
    console.log("sdfaf");
        if (event.key == "Enter") {
          createNote(contetInputNote.value);
        }
}