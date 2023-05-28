import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyItemComponent } from './shopify-item.component';

describe('ShopifyItemComponent', () => {
  let component: ShopifyItemComponent;
  let fixture: ComponentFixture<ShopifyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopifyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopifyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
