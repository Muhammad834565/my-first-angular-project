import { Component} from '@angular/core';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.css'
})
export class Login1Component {
  
  savedInput: string = ''; // Variable to store the saved input

  saveInput(value: string): void {
    this.savedInput = value; // Save the input value to the variable
  }
}
