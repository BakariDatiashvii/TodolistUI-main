import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListGetComponent } from './category-list-get.component';

describe('CategoryListGetComponent', () => {
  let component: CategoryListGetComponent;
  let fixture: ComponentFixture<CategoryListGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryListGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
