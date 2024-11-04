import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailFenceCipherComponent } from './rail-fence-cipher.component';

describe('RailFenceCipherComponent', () => {
  let component: RailFenceCipherComponent;
  let fixture: ComponentFixture<RailFenceCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailFenceCipherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailFenceCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
