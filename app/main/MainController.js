(function(){
    var app = angular.module("app");

    
    var MainController = function($scope, fStorage) {
         $scope.tasks = fStorage.convert();
         $scope.disableButton = true;

         $scope.addNewTask= function(addtask) {
            var position = $scope.tasks.task.length;
            $scope.tasks.task[position] = addtask;
            $scope.tasks.state[position] = false;
            $scope.taskNew = undefined;
            $scope.disableButton = true;
        }

        $scope.removeTask = function(position) {
            $scope.tasks.task.splice(position,1);
            $scope.tasks.state.splice(position,1);
        }

        $scope.taskListener = function(position,task) {
            $scope.tasks.task[position] = task;
        }

        $scope.saveTask = function() {
            fStorage.saveTask($scope.tasks);
        }
        
        $scope.disableAdd = function(task) {
             return task ? false : true;
        }
    }

    app.controller("MainController", MainController);
})();