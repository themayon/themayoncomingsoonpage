import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoOptions {
  title: string;
  description: string;
  url?: string;
  image?: string;
  structuredData?: Record<string, unknown>;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly documentRef = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  setSeo(options: SeoOptions): void {
    this.title.setTitle(options.title);
    this.meta.updateTag({ name: 'description', content: options.description });
    this.meta.updateTag({ property: 'og:title', content: options.title });
    this.meta.updateTag({ property: 'og:description', content: options.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: options.title });
    this.meta.updateTag({ name: 'twitter:description', content: options.description });

    if (options.url) {
      this.meta.updateTag({ property: 'og:url', content: options.url });
      this.setCanonicalLink(options.url);
    }

    if (options.image) {
      this.meta.updateTag({ property: 'og:image', content: options.image });
      this.meta.updateTag({ name: 'twitter:image', content: options.image });
    }

    if (options.structuredData) {
      this.setStructuredData(options.structuredData);
    }
  }

  private setCanonicalLink(url: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const head = this.documentRef.head;
    let canonical = this.documentRef.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.documentRef.createElement('link');
      canonical.rel = 'canonical';
      head.appendChild(canonical);
    }

    canonical.href = url;
  }

  private setStructuredData(data: Record<string, unknown>): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const existing = this.documentRef.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }

    const script = this.documentRef.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.documentRef.head.appendChild(script);
  }
}

