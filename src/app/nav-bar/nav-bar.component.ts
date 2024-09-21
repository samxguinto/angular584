import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatIconModule, MatToolbar, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
