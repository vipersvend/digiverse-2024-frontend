import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanaromaComponent } from './panaroma.component';

describe('PanaromaComponent', () => {
  let component: PanaromaComponent;
  let fixture: ComponentFixture<PanaromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanaromaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanaromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
