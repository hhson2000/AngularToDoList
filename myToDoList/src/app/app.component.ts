import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks = [
    { name: "task 1", status: false },
    { name: "task 2", status: false },
    { name: "task 3", status: true },
  ]

  changeStatus(task: any) {
    var index = this.tasks.indexOf(task);
    for (let i = 0; i < this.tasks.length; i++) {
      if (index == i) this.tasks[i].status = !this.tasks[i].status;
    }
  }
  //stack
  removeTask(task: any) {
    var index = this.tasks.indexOf(task);
    for (let i = 0; i < this.tasks.length; i++) {
      if (index == i) this.tasks.splice(i,1);
    }
  }

  addTask(taskName:any){
    var task={
      name:taskName,
      status:false
    };
   this.tasks.push(task);

   alert("add task ok")
  }
}



