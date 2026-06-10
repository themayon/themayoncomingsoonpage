import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  heroMetrics,
  homeSeo,
  industryCards,
  productCards,
  serviceCards,
  testimonials,
  techStackCards,
  whyChooseCards
} from '../../shared/data/site-content';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly metrics = heroMetrics;
  readonly services = serviceCards;
  readonly products = productCards;
  readonly industries = industryCards;
  readonly reasons = whyChooseCards;
  readonly stack = techStackCards;
  readonly quotes = testimonials;

  constructor(private readonly seo: SeoService) {
    this.seo.setSeo({
      title: homeSeo.title,
      description: homeSeo.description,
      url: 'https://www.themayon.in/',
      structuredData: homeSeo.structuredData
    });
  }
}
