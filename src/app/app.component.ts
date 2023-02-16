import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  hey:any;
  messageOfChild(event:any){
    this.hey = event;

  }


  captcha: string;                                // empty = not yet proven to be a human, anything else = human
  email: string

  constructor() { 
    this.captcha = '';
    this.email = 'Secret@email.com';
}


resolved(captchaResponse: string) {
  this.captcha = captchaResponse;
  console.log('resolved captcha with response: ' + this.captcha);
}










  ca!: boolean;
  pr!:boolean;
  a!: boolean;
  se!:boolean;

  ngOnInit(){
    this.a = true;
    this.pr = false;
    this.ca= false;
    this.se= false;

  }

  title = 'demo';


  all(){
    this.a= true;
    this.ca = false;
    this.pr = false;
    this.se = false;

  }

  semester(){
    this.a= false;
    this.ca = false;
    this.pr = false;
    this.se = true;

  }

  product(){
    this.a= false;
    this.ca = false;
    this.pr = true;
    this.se = false;

  }

  camp(){
    this.a= false;
    this.ca = true;
    this.pr = false;
    this.se = false;

  }






}
