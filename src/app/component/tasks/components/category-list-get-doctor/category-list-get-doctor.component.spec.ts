import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListGetDoctorComponent } from './category-list-get-doctor.component';

describe('CategoryListGetDoctorComponent', () => {
  let component: CategoryListGetDoctorComponent;
  let fixture: ComponentFixture<CategoryListGetDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListGetDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryListGetDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
