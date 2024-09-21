import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})

export class NavigationBarComponent {
  searchVal = ''
}
