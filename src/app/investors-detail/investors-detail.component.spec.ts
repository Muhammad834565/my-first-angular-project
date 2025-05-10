import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsDetailComponent } from './investors-detail.component';

describe('InvestorsDetailComponent', () => {
  let component: InvestorsDetailComponent;
  let fixture: ComponentFixture<InvestorsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
