import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConentComponent } from './main-conent.component';

describe('MainConentComponent', () => {
  let component: MainConentComponent;
  let fixture: ComponentFixture<MainConentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainConentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
