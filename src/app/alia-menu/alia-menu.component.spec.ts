import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliaMenuComponent } from './alia-menu.component';

describe('AliaMenuComponent', () => {
  let component: AliaMenuComponent;
  let fixture: ComponentFixture<AliaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
