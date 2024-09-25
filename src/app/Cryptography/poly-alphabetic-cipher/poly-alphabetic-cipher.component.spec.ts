import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyAlphabeticCipherComponent } from './poly-alphabetic-cipher.component';

describe('PolyAlphabeticCipherComponent', () => {
  let component: PolyAlphabeticCipherComponent;
  let fixture: ComponentFixture<PolyAlphabeticCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolyAlphabeticCipherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolyAlphabeticCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
