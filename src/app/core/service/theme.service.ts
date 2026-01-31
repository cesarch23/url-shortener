import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkClass = 'dark';

  constructor() {}

  enableDark() {
    document.documentElement.classList.add(this.darkClass);
  }

  enableLight() {
    document.documentElement.classList.remove(this.darkClass);
  }

  toggle() {
    document.documentElement.classList.toggle(this.darkClass);
  }

  isDark(): boolean {
    return document.documentElement.classList.contains(this.darkClass);
  }
}
