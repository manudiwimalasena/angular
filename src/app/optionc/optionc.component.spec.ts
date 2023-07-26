import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptioncComponent } from './optionc.component';

describe('OptioncComponent', () => {
  let component: OptioncComponent;
  let fixture: ComponentFixture<OptioncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptioncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
