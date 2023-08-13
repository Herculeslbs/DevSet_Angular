import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdevsetComponent } from './adevset.component';

describe('AdevsetComponent', () => {
  let component: AdevsetComponent;
  let fixture: ComponentFixture<AdevsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdevsetComponent]
    });
    fixture = TestBed.createComponent(AdevsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
