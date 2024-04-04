import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstNgApp';
  purchase : string = '';
  price : number = 0;

  items : Item[] = [
    new Item('Bread',15.6),
    new Item('Meat',130.5),
    new Item('Rice', 12.4)
  ];

  addItem(purchase : string, price : number) : void{
    if(purchase === '' || purchase === null){
      alert('You need write purchase name')
      return;
    }
    this.items.push(new Item(purchase,price));
    this.purchase = '';
    this.price = 0;
  }
}


class Item {
  purchase: string;
  done : boolean;
  price : number

  constructor(purchase : string, price : number ) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}
