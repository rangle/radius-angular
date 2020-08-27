import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: string;
}
