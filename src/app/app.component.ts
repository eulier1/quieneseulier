import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'quieneseulier';

  public innerWidth = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  ngAfterViewInit() {
    this.innerWidth = window.innerWidth;
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if ( this.innerWidth <= 767 ) {
      console.log('/mobile');
      this.router.navigate(['/mobile']);
    } else {
      console.log('/desktop');
      this.router.navigate(['/desktop']);
    }
  }

}
