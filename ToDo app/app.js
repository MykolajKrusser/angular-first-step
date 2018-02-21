'use strict';
var app = angular.module("toDoApp", []);
app.controller("ToDoCtrl", ToDoCtrl);

function ToDoCtrl() {
    this.editMode = false;
    this.todos = [];
    this.addNewToDo = function () {
        this.todos.push(this.newToDo);
        this.newToDo = "";
    };
    this.triggerEditMode = function () {
        this.editMode = !this.editMode;
    };
    this.deleteToDo = function (index) {
        this.todos.splice(index, 1);
    };
}