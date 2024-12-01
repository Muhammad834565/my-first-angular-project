import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowColumnCipherComponent } from './row-column-cipher.component';

describe('RowColumnCipherComponent', () => {
  let component: RowColumnCipherComponent;
  let fixture: ComponentFixture<RowColumnCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowColumnCipherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowColumnCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
