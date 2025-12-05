import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';
import { ProcedurePanel } from '../../components/procedure-panel/procedure-panel';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, ProcedurePanel],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
