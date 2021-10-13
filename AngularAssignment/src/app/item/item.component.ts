import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Todo } from '../models/model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem!:Todo[];
  @Output() deleteTask = new EventEmitter<Todo>();
  @Output() changeStatus = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(task:Todo){
    return this.deleteTask.emit(task);
  }

  changeStatusTask(task:Todo){
    return this.changeStatus.emit(task);
  }
  
}
