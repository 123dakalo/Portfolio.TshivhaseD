import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'portfoliotd';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const menu: HTMLElement | null = document.querySelector(".menu");
      const nav: HTMLElement | null = document.querySelector("nav");

      if (menu && nav) {
        menu.addEventListener("click", () => {
          menu.classList.toggle("active");
          nav.classList.toggle("active");
        });
      }
    }
  }
}
