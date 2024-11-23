import {Component, input} from '@angular/core';
import {Button} from "primeng/button";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  icon = input('')
  rounded = input<boolean | string>(false)
}
