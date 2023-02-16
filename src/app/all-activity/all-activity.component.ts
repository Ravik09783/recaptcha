import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-all-activity',
  templateUrl: './all-activity.component.html',
  styleUrls: ['./all-activity.component.css']
})
export class AllActivityComponent {

  @Input() message!:string;

}
