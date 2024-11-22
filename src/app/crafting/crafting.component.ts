import {Component, OnInit, signal} from '@angular/core';
import {ToolbarService} from "../services/toolbar.service";
import {items} from "./item/item-list";
import {Item} from "./item/item";
import {ItemComponent} from "./item/item.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-crafting',
  standalone: true,
  imports: [
    ItemComponent,
    NgClass
  ],
  templateUrl: './crafting.component.html',
  styleUrl: './crafting.component.scss'
})
export class CraftingComponent implements OnInit {
  items = signal<Item[]>([])
  selectedItem = signal<Item | undefined>(undefined)
  requiredItems = signal<Item[]>([])

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit(): void {
    this.toolbarService.setTitle('Crafting');
    this.items.set(items);
  }

  selectItem(item: Item) {
    if (item === this.selectedItem()) {
      this.selectedItem.set(undefined)
      this.requiredItems.set([])
      return
    }

    this.selectedItem.set(item);
    const list: Item[] = []

    this.addRequiredItems(list, item)
    this.requiredItems.set(list);
    console.log(this.requiredItems());
  }

  addRequiredItems(requiredItems: Item[], item: Item) {
    item.items.forEach(requiredId => {
      const item = items.find(item => item.id === requiredId);
      if (item) {
        requiredItems.unshift(item)
        this.addRequiredItems(requiredItems, item)
      }
    })
  }
}
