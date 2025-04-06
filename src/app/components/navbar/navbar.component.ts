import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      const themeIcon = document.getElementById('theme-icon');
      themeIcon?.classList.replace('bi-moon', 'bi-sun');
    }
  }

  toggleTheme() {
    const themeIcon = document.getElementById('theme-icon');
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    themeIcon?.classList.replace(isDarkMode ? 'bi-moon' : 'bi-sun', isDarkMode ? 'bi-sun' : 'bi-moon');
  }
}