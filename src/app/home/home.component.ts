import { Component } from '@angular/core';
import { TopComponent } from "./top/top.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroeComponent } from "./heroe/heroe.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopComponent, NavbarComponent, HeroeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
