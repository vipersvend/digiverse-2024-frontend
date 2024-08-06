import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSupportComponent } from './tech-support.component';

describe('TechSupportComponent', () => {
  let component: TechSupportComponent;
  let fixture: ComponentFixture<TechSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
