import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StateService } from './services/state.service';
import { FormsModule } from '@angular/forms';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  // FormsModule moet hier worden geïmporteerd omdat we gebruik maken
  // van ngModel in de template (app.component.html)
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private stateService: StateService, private backendService: BackendService) {
    console.log(stateService.counter);
    this.message = backendService.message
  }

  title = 'MyFirstThing';
  message:any;

  parentUser = "Anonymous"

  // Deze functie is niet meer nodig, we gebruiken nu NgModel two way binding
  // onKeyUp(event:any) {
  //   this.parentUser = event.target.value;
  // }

  onClick(event:any) {
    this.stateService.inc();
    console.log(this.stateService.counter);
    this.backendService.callGreeter();
  }
}
