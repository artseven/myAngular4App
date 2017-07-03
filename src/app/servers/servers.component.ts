import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = "No server was created!";
  serverName:string = 'Testserver';
  // username:string = '';
  usernameCreationStatus:string = "No username assigned!";
  // allowNewUsername:boolean = false;
  serverCreated:boolean = false;
  // servers = ['Testserver', 'Testserver 2'];
  secretPassword: string = '';
  allowedPassword: boolean = false;
  clicks = [];
  click: number = 0;
  clickRegistered: string = '';
  backgroundColor: string = '';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  displayDetails() {
    this.secretPassword = "Cooper and Charlie"
    this.allowedPassword = !this.allowedPassword;
    this.click += 1;
    this.clicks.push(this.click);
    this.clickRegistered = "Click was registered! Number:"+ this.click;
    console.log(this.clicks);
  }

}
