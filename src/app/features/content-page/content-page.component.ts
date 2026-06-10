import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { PageContent } from '../../shared/models/site-content.model';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentPageComponent {
  readonly page: PageContent;

  constructor(route: ActivatedRoute, seo: SeoService) {
    this.page = route.snapshot.data['page'] as PageContent;

    seo.setSeo({
      title: `${this.page.title} | The Mayon`,
      description: this.page.summary,
      url: `https://www.themayon.in/${this.page.slug}`,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: this.page.title,
        description: this.page.summary,
        url: `https://www.themayon.in/${this.page.slug}`
      }
    });
  }
}

