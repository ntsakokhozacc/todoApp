import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos:Todo[]
  inputTodo:string = "";
  conditonal:boolean = true;

  constructor() { }

  ngOnInit(): void {

    this.todos = []


  }

  toggleDone(id:number){
    this.todos.map((v, i) => {
      if (i==id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v, i) => i !==id)
  }

  addTodo(){
    if (this.inputTodo==""){
        return null;
    }else{
      this.todos.push({content:this.inputTodo, completed:false});
      this.inputTodo = "";
    }

    
  }

  clearAll(){
    this.todos =[];
  }

  editTodo(id:number){
    
    this.todos.map((v, i) => {
      if (i==id) this.conditonal = !this.conditonal;
      return this.conditonal;
    })
    


    return this.conditonal;
  }

}
