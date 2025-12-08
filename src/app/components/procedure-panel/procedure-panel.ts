import { Component } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-procedure-panel',
  imports: [],
  templateUrl: './procedure-panel.html',
  styleUrl: './procedure-panel.css',
})
export class ProcedurePanel {
  constructor (
    public translate: Translation
  ) {}
}
