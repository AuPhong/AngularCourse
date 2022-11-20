import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

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
  @ViewChild('serverContentInput', {static: true}) serverContentInput!: ElementRef;

  onAddServer(serverName: HTMLInputElement) {
    this.serverData.emit({serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintData.emit({serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value})
  }
}
