import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	
	allowNewServer: boolean = false;
	serverCreationStatus: string = 'No server was created!!';
	serverName: string = 'test';
	serverCreated: boolean = false;

	constructor() { 
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000 );
	}
	
	ngOnInit() {
	}
	
	onUpdateServerName = ( event: any ) => {
		this.serverName = ( <HTMLInputElement>event.target ).value;
	}

	onCreateServer = () => {
		this.serverCreated = true;
		this.serverCreationStatus = 'Server was created!! Name is ' + this.serverName; 
	}
}
