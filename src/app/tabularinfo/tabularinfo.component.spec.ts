import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularinfoComponent } from './tabularinfo.component';

describe('TabularinfoComponent', () => {
  let component: TabularinfoComponent;
  let fixture: ComponentFixture<TabularinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabularinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabularinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
