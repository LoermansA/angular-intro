import { Component, input, SimpleChanges } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges) {
    for (const element in changes) {
      console.log(`Something has changed: ${element}`)
      const change = changes[element];
      console.log(`Changed from ${change.previousValue} to ${change.currentValue}`)
    }
  }

}
