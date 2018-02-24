'use strict';
var app = angular.module("toDoApp", []); //create angular app module
app.controller("ToDoCtrl", ToDoCtrl); //create controller

function ToDoCtrl() { //function for controller
    this.editMode = false; //for hide/show directive
    this.todos = []; //array with li elements
    this.addNewToDo = function () { //add function which add value of input modal to array
        this.todos.push(this.newToDo);
        this.newToDo = ""; //clear input
    };
    this.triggerEditMode = function () {
        this.editMode = !this.editMode; //change hide/show condition
    };
    this.deleteToDo = function (index) {
        this.todos.splice(index, 1); //delete clicked li element from array defined by position index in html
    };
}