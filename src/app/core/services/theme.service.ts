import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly documentRef = inject(DOCUMENT);
  readonly theme = signal<ThemeMode>('dark');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.setTheme('dark');
  }

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.applyTheme(mode);
  }

  private applyTheme(mode: ThemeMode): void {
    this.documentRef.documentElement.setAttribute('data-theme', mode);
  }
}
