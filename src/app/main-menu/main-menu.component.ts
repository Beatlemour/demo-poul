import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Output()
  elementEmitter = new EventEmitter();

  ngOnInit(): void {

  }

  toggleElement(){
    console.log('Toggled');
    this.elementEmitter.emit();
    //return;
  }
}
