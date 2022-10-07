import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //creating two new properties
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //EventEmitter is a generic type which is indicated in typescript and at end () to call the constructor of eventEmitter and create a new eventEmitter object which is now stored in serverCreated
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(nameInput.value);//nameInput tat is what the local ref gives us, the element with all its properties.
    //local ref, a very nice feature to get access to some elements in ur template and use tat either directly in the template.
   this.serverCreated.emit({
    serverName: nameInput.value, 
    serverContent: this.serverContentInput.nativeElement.value //native element to get access to the underlying element.
  });  
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //this.serverContentInput.nativeElement.value  -- should not access DOM like this. so the correct way is next 3rdline.
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value  //by this we get direct access to elements in our DOM in our template through at viewchild.
    });  
  }
}
