import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvginfoComponent } from './svginfo.component';

describe('SvginfoComponent', () => {
  let component: SvginfoComponent;
  let fixture: ComponentFixture<SvginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvginfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
