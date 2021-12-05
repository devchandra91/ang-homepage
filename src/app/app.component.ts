import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-homepage';
  public cardData = [
    {
      title : 'Angular',
      description: "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor.",
      link: "https://angular.io",
      img: "../assets/images/angular.svg"
    },
    {
      title : 'Bootstrap',
      description: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
      link: "https://getbootstrap.com/",
      img: "../assets/images/bootstrap.svg"
    },
    {
      title : 'HTML',
      description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Hypertext refers to links that connect web pages to one another, either within a single website or between websites.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      img: "../assets/images/html.svg"
    }
  ]

  scrollToTop () {
    document.documentElement.scrollTop = 0;
  }
}
