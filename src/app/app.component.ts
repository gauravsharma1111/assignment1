import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  toggler:boolean=false;
  logs=[];

  constructor(){
    setTimeout(() => {
      this.allowNewServer=true;
    }, 3000);
  }

  logging(){
    this.logs.push(this.logs.length);
  }


  allowNewServer:boolean=false;
  serverCreationStatus="No server was created!";
  serverId:number=10;
  serverStatus:string='offline';
  serverName:string="";
  getServerStatus(){
    return this.serverStatus;
  }


  onCreateServer(){
    this.serverCreationStatus="Server was created! by Name "+this.serverName;
  }

}

