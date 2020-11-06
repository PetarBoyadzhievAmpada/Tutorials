import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  serverCreationStatus = 'No server was created';
  serverName:string = 'MyServer';
  serverID:number = 20;
  serverStatus:string = 'Online' ;
  allowNewServer = false;
  serverCreated = false;
  changeName = false;
  


  
  getServerStatus(){
    return this.serverStatus;
  }

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer =false;
    },2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created';
  }

  onChangeServerName(){
    this.changeName = true;
    this.serverName = 'Server1 ';
  }

  ngOnInit(): void {
  }

}
