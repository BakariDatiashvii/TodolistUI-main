import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRegistrationCodeComponent } from './send-registration-code.component';

describe('SendRegistrationCodeComponent', () => {
  let component: SendRegistrationCodeComponent;
  let fixture: ComponentFixture<SendRegistrationCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendRegistrationCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendRegistrationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
