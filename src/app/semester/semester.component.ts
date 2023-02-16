import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent {

  @Output() child = new EventEmitter()

  childMessage(){
    this.child.emit("Hello From Child Component")
  }

}
