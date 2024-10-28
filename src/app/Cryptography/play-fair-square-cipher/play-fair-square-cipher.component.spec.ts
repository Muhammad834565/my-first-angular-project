import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFairSquareCipherComponent } from './play-fair-square-cipher.component';

describe('PlayFairSquareCipherComponent', () => {
  let component: PlayFairSquareCipherComponent;
  let fixture: ComponentFixture<PlayFairSquareCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayFairSquareCipherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayFairSquareCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
