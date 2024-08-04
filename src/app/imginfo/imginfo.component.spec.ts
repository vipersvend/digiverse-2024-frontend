import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImginfoComponent } from './imginfo.component';

describe('ImginfoComponent', () => {
  let component: ImginfoComponent;
  let fixture: ComponentFixture<ImginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImginfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
