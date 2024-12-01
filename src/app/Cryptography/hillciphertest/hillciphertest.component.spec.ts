import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillciphertestComponent } from './hillciphertest.component';

describe('HillciphertestComponent', () => {
  let component: HillciphertestComponent;
  let fixture: ComponentFixture<HillciphertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HillciphertestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HillciphertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
