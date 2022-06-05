import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextblueComponent } from './textblue.component';

describe('TextblueComponent', () => {
  let component: TextblueComponent;
  let fixture: ComponentFixture<TextblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextblueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
