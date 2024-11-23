import {Component, EventEmitter, input, Output} from '@angular/core';
import {Item, UNLOCKED_ITEMS_SOTRAGE_KEY} from "./item";
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

  unlockItem(event: MouseEvent, item: Item) {
    event.stopPropagation();
    item.unlocked = true;
    const unlockedItems: number[] = JSON.parse(localStorage.getItem(UNLOCKED_ITEMS_SOTRAGE_KEY) || '[]')
    if (!unlockedItems.includes(item.id))
      unlockedItems.push(item.id)
    localStorage.setItem(UNLOCKED_ITEMS_SOTRAGE_KEY, JSON.stringify(unlockedItems));
  }
}
