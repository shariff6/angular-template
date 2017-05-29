//import the Component code from the core Angular framework code
import { Component } from '@angular/core';

//Component Annotation
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
  </div>
  `
})


//The component's class declaration holds the required data and methods to make the template HTML functional
export class AppComponent {

}