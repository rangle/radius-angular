import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {

  @Input() variant: 'one' | 'two' = 'two';

  BLOGS = [
    {
      title: 'Preparing for a design system: Visible, consistent and changeable components',
      url:
        'https://rangle.io/blog/before-design-systems-visible-consistent-and-changeable-components/',
      coverImage:
        'https://rangleio.ghost.io/content/images/size/w1000/2021/12/components-blog-16x9-1.png',
      description:
        'For many Product Owners or product team leaders, design systems still seem like a nice-to-have, rather than a must-have. Companies may have a design system implemented up to the point of a design kit (which aligns the work of designers within their own teams, but does little to support cross-functional work), or have multiple, mostly independent design systems that cover each of their products, which aren\'t helping with speed and scale for the overall business.',
      authors: 'Lauren Suh, Ben Hofferber',
      publishDate: 'December 30, 2021',
      tags: 'Development, Design System'
    },
    {
      title: 'The best way to combat the “Great Reshuffle',
      url:
        'https://rangle.io/blog/combat-the-great-reshuffle',
      coverImage:
        'https://rangleio.ghost.io/content/images/size/w1000/2021/11/blog_greatreshuffle_nov30_16x9.png',
      description:
        'Employee satisfaction is the new buzzword on the lips of the C-suite across the world. While hardly a new concept — studies on job satisfaction go back decades — the employment turnover rate in the US for the tech industry is projected to reach 70%, according to a study cited in a recent article in Forbes.',
      authors: 'Rebecca Holland',
      publishDate: 'November 30, 2021',
      tags: 'Business, Job Satisfaction, Employee Engagement, Business Strategy, Business Transformation'
    },
    {
      title: 'A beginner\'s guide to UX writing',
      url:
        'https://rangle.io/blog/ux-writing-guide/',
      coverImage:
        'https://rangleio.ghost.io/content/images/size/w1000/2022/02/ux-writing-desktop.png',
      description:
        'UX writing is based on two simple principles: Be respectful and be useful. A UX writer works from a place of empathy, always thinking about the end user or customer first, and putting themselves in their place to understand how an interface can be a delightful experience, removing any potential frustrations, problems, or mistakes for them.',
      authors: 'Rebecca Holland, Alicia Cheung',
      publishDate: 'February 7, 2022',
      tags: 'Design, UX, Product Writing, UX Writing, Design Writing, accessibility'
    },
    {
      title: 'Can a design system be accessible?',
      url:
        'https://rangle.io/blog/can-a-design-system-be-accessible/',
      coverImage:
        'https://rangleio.ghost.io/content/images/size/w1000/2021/10/aug5_desktop_16x9.png',
      description:
        'Over the past couple of years working at Rangle, I’ve had the opportunity to work on a handful of design systems (DS). One consistent ask for the design systems I’ve worked on is to “make the design system accessible”, or get it to a point where they can certify that everything within the design system meets their minimum legal requirement for accessibility (like WCAG 2.x AA). On the surface, this sounds achievable, but this doesn’t mean what they think it means.',
      authors: 'Rangle.io',
      publishDate: 'October 21, 2021',
      tags: 'Design, Design System, accessibility'
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.variant = params.variant || 'one';
      });
  }

}
