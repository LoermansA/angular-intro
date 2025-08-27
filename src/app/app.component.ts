import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private stateService: StateService) {
    console.log(stateService.counter);
  }

  title = 'MyFirstThing';

  parentUser = "Anonymous"

  onKeyUp(event:any) {
    this.parentUser = event.target.value;
  }

  onClick(event:any) {
    this.stateService.inc();
    console.log(this.stateService.counter);
  }
}
