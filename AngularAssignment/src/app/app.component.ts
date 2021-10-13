import { Component } from '@angular/core';
import { Todo } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo:Todo[]=[{title:'clean', completed:false},{title:'meow', completed:true},{title:'hehe', completed:false}];

  removeTask(item:Todo){
    console.log(item);
    const index = this.todo.indexOf(item);
    const lenght = this.todo.length;
    for (let i = 0; i < lenght; i++) {
     if(index==i) this.todo.splice(index,1);
   }
  }

  addTask(taskName:any){
    var task={
      title:taskName,
      completed:false
    };
   this.todo.push(task);
   console.log(task);
  }

  changeStatusTask(item:Todo){
    const index= this.todo.indexOf(item);
    const lenght = this.todo.length;
    for (let i = 0; i < lenght; i++) {
        if(i==index) this.todo[i].completed = !this.todo[i].completed;
    }

  }


}
