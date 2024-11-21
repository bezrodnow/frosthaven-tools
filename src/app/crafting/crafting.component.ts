import {Component, OnInit} from '@angular/core';
import {ToolbarService} from "../services/toolbar.service";
import {items} from "./item-list";
import {Item} from "./item";

@Component({
  selector: 'app-crafting',
  standalone: true,
  imports: [],
  templateUrl: './crafting.component.html',
  styleUrl: './crafting.component.scss'
})
export class CraftingComponent implements OnInit {
  items: Item[] = [];

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit(): void {
    this.toolbarService.setTitle('Crafting');
    this.items = items;
  }
}
