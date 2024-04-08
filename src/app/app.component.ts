import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Item} from "./models/Item";
import {ItemTableComponent} from "./components/item-table/item-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ItemTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstNgApp';
  purchase : string = '';
  price : number = 0;

  items : Item[] = [];

  addItem(purchase : string, price : number) : void {
    console.log('purchase', purchase);
    console.log('price', price);
    this.items.push(new  Item(purchase, price));
  }
}



