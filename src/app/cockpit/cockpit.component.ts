import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverData = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output() blueprintData = new EventEmitter<{serverName: string, serverContent: string}>()
  serverElements: any[] = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverData.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintData.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }
}
