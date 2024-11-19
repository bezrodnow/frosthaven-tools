import {Routes} from '@angular/router';
import {CraftingComponent} from "./crafting/crafting.component";

export const routes: Routes = [
  {path: '', redirectTo: 'crafting', pathMatch: 'full'},
  {path: 'crafting', component: CraftingComponent},
];
