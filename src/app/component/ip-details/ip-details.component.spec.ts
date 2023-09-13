import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDetailsComponent } from './ip-details.component';

describe('IPDetailsComponent', () => {
  let component: IPDetailsComponent;
  let fixture: ComponentFixture<IPDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IPDetailsComponent],
    });
    fixture = TestBed.createComponent(IPDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
