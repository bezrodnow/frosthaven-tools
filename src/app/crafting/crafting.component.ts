import { Component } from '@angular/core';
import {ToolbarComponent} from "../base-component/toolbar/toolbar.component";

@Component({
  selector: 'app-crafting',
  standalone: true,
  imports: [
    ToolbarComponent
  ],
  templateUrl: './crafting.component.html',
  styleUrl: './crafting.component.scss'
})
export class CraftingComponent {

}
