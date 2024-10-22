import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimePadCipherComponent } from './one-time-pad-cipher.component';

describe('OneTimePadCipherComponent', () => {
  let component: OneTimePadCipherComponent;
  let fixture: ComponentFixture<OneTimePadCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneTimePadCipherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneTimePadCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
