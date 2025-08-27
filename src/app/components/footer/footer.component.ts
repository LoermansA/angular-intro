import { Component, input } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private stateService: StateService) {
    this.localCounter = stateService.counter;

  }

  localCounter:any;

  user = input("Anonymous");

}
