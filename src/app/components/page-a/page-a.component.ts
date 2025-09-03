import { Component } from '@angular/core';

@Component({
  selector: 'app-page-a',
  imports: [],
  templateUrl: './page-a.component.html',
  styleUrl: './page-a.component.css'
})
export class PageAComponent {

  ngOnInit() {
    console.log('Page A ngOnInit()')
  }

  ngOnDestroy() {
    console.log('Page A ngOnDestroy()')

  }

}
