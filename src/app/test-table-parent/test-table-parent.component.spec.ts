import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTableParentComponent } from './test-table-parent.component';

describe('TestTableParentComponent', () => {
  let component: TestTableParentComponent;
  let fixture: ComponentFixture<TestTableParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTableParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
