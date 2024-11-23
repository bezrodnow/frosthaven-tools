import {Component, EventEmitter, input, Output} from '@angular/core';
import {Item} from "./item";
import {NgClass} from "@angular/common";
import {ButtonComponent} from "../../base-component/button/button.component";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    NgClass,
    ButtonComponent,
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
