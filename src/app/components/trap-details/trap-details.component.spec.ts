import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapDetailsComponent } from './trap-details.component';

describe('TrapDetailsComponent', () => {
  let component: TrapDetailsComponent;
  let fixture: ComponentFixture<TrapDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
