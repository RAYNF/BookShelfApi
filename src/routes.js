const {addNoteHandler,
       getAllNotesHandler,
       getAllNotesByIdHandler,
       editNoteByIdHandler,
       deleteNoteByIdHandler

      } = require("./handler");
  
const routes = [
    {
      method: "POST",
      path: "/books",
      handler: addNoteHandler,
    },
    {
        method:"GET",
        path: "/books",
        handler: getAllNotesHandler
    },
    {
        method:"GET",
        path:"/books/{id}",
        handler:getAllNotesByIdHandler
    },
    {
        method:"PUT",
        path:"/books/{id}",
        handler: editNoteByIdHandler
    },
    {
        method:"DELETE",
        path:"/books/{id}",
        handler: deleteNoteByIdHandler
    }
    

];
module.exports = routes;
