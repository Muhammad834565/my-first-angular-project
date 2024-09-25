import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceVigenereCipherComponent } from './advance-vigenere-cipher.component';

describe('AdvanceVigenereCipherComponent', () => {
  let component: AdvanceVigenereCipherComponent;
  let fixture: ComponentFixture<AdvanceVigenereCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceVigenereCipherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceVigenereCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
