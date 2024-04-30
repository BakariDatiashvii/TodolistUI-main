import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCodeMailComponent } from './send-code-mail.component';

describe('SendCodeMailComponent', () => {
  let component: SendCodeMailComponent;
  let fixture: ComponentFixture<SendCodeMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendCodeMailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendCodeMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
