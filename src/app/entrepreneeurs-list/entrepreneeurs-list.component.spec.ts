import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneeursListComponent } from './entrepreneeurs-list.component';

describe('EntrepreneeursListComponent', () => {
  let component: EntrepreneeursListComponent;
  let fixture: ComponentFixture<EntrepreneeursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepreneeursListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepreneeursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
