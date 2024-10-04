import { Component } from '@angular/core';
import { CatalogComponent } from "../catalog/catalog.component";
import { CalculatriceComponent } from "../calculatrice/calculatrice.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule, CatalogComponent, CalculatriceComponent],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.scss'
})
export class WorkshopsComponent {

}
