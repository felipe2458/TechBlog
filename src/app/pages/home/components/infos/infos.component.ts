import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infos',
  imports: [CommonModule],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css'
})
export class InfosComponent {
  @Input() url_image!: string;
  @Input() title!: string;
  @Input() description!: string;
}
