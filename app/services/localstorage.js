(function(){

    var app = angular.module("app");
    
    if (typeof(Storage) !== "undefined") {

        if(localStorage.getItem("tasks")) {
            var tasksDefine = {
                "task": ["my first task"],
                "state": [false]};
            localStorage.setItem("tasks",JSON.stringify(tasksDefine))
        }
    }

    var fStorage = function() {

        var save = function(tasks) {
            localStorage.setItem("tasks",JSON.stringify(tasks));
        }
        

        var convertStorage = function() {
            var objectStorage = JSON.parse(localStorage.getItem("tasks"));
            return objectStorage
        }
        
        return {
            saveTask: save,
            convert: convertStorage
        };
    } 

    app.factory("fStorage",fStorage);

})();