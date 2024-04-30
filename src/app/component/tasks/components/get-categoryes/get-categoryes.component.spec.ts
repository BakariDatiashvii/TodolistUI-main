import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCategoryesComponent } from './get-categoryes.component';

describe('GetCategoryesComponent', () => {
  let component: GetCategoryesComponent;
  let fixture: ComponentFixture<GetCategoryesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCategoryesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCategoryesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
