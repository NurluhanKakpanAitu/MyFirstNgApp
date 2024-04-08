import {Component, Input} from '@angular/core';
import {Item} from "../../models/Item";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-item-table',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './item-table.component.html',
  styleUrl: './item-table.component.css'
})
export class ItemTableComponent {
  @Input()  items : Item[];
}
