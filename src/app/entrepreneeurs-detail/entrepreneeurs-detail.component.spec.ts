import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneeursDetailComponent } from './entrepreneeurs-detail.component';

describe('EntrepreneeursDetailComponent', () => {
  let component: EntrepreneeursDetailComponent;
  let fixture: ComponentFixture<EntrepreneeursDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepreneeursDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepreneeursDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
