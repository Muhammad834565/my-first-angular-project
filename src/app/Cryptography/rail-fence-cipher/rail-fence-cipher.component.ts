import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-rail-fence-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './rail-fence-cipher.component.html',
  styleUrl: './rail-fence-cipher.component.css'
})
export class RailFenceCipherComponent {


 
  savedInput: string = ''; // Variable to store the saved input
  type:string="";

  saveInput(value: string): void {
    this.savedInput = value; // Save the input value to the variable
  }
  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
    var j = 2
    var a=""
    var b=""
    for (let i = 0; i < value.length; i=i+j){
      a+=value[i];
      if(value[i+1]!=undefined){
        b+=value[i+1];
      }
      
    }
    this.savedInput=a+b
    console.log(this.savedInput);
    }     
  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    var j = 2
    var k=Math.ceil(value.length/j);
    var b=""
    for (let i = 0; i < k; i++){
      this.savedInput+=value[i];
      if(value[k+i]!=undefined){
        this.savedInput+=value[k+i];
      }
      
    }
    console.log(this.savedInput);
    }     


  }
