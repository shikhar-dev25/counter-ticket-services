import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedurePanel } from './procedure-panel';

describe('ProcedurePanel', () => {
  let component: ProcedurePanel;
  let fixture: ComponentFixture<ProcedurePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedurePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedurePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
