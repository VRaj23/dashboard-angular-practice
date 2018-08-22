import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashboradItemComponent } from './my-dashborad-item.component';

describe('MyDashboradItemComponent', () => {
  let component: MyDashboradItemComponent;
  let fixture: ComponentFixture<MyDashboradItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashboradItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashboradItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
