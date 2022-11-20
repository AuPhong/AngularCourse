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

  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.serverData.emit({serverName: serverName.value, serverContent: serverContent.value})
  }

  onAddBlueprint(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.blueprintData.emit({serverName: serverName.value, serverContent: serverContent.value})
  }
}
