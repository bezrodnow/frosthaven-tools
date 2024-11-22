import {Component, EventEmitter, input, Output, output} from '@angular/core';
import {Item} from "./item";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  item = input<Item>();
  @Output() onItemClick = new EventEmitter<Item>();

  doOnCardClick(item: Item) {
    this.onItemClick.emit(item);
  }
}
