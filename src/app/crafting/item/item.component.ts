import {Component, input} from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  item = input<Item>();
}
