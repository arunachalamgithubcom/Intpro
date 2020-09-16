import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwishlistComponent } from './productwishlist.component';

describe('ProductwishlistComponent', () => {
  let component: ProductwishlistComponent;
  let fixture: ComponentFixture<ProductwishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductwishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
