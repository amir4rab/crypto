import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRowComponent } from './chart-row.component';

describe('ChartRowComponent', () => {
  let component: ChartRowComponent;
  let fixture: ComponentFixture<ChartRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
