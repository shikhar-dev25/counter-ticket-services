import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingPointChange } from './boarding-point-change';

describe('BoardingPointChange', () => {
  let component: BoardingPointChange;
  let fixture: ComponentFixture<BoardingPointChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardingPointChange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardingPointChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
