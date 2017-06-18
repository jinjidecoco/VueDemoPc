
 var STORAGE_KEY = 'todos-vuejs-2.0';
    var todoStorage = {
      fetch: function () {
        var toDos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        toDos.forEach(function (toDo, index) {
          toDo.id = index
        })
        todoStorage.uid = toDos.length
        return toDos         
      },
      save: function (toDos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toDos))
      }
    }; 