import { Component, OnInit } from '@angular/core';
import { TestTableComponent } from '../test-table/test-table.component';

@Component({
  selector: 'app-test-table-parent',
  templateUrl: './test-table-parent.component.html',
  styleUrls: ['./test-table-parent.component.css']
})
export class TestTableParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectElement(element:any) : void {
    
    console.log('element:Parent', element);

    return;
  }
}
