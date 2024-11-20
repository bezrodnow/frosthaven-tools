import {Component, OnInit} from '@angular/core';
import {ToolbarService} from "../services/toolbar.service";

@Component({
  selector: 'app-crafting',
  standalone: true,
  imports: [],
  templateUrl: './crafting.component.html',
  styleUrl: './crafting.component.scss'
})
export class CraftingComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit(): void {
    this.toolbarService.setTitle('Crafting');
  }
}
