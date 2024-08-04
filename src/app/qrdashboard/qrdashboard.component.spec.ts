import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrdashboardComponent } from './qrdashboard.component';

describe('QrdashboardComponent', () => {
  let component: QrdashboardComponent;
  let fixture: ComponentFixture<QrdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
