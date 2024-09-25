import { Component } from '@angular/core';
import { range } from 'rxjs';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-caesar-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './caesar-cipher.component.html',
  styleUrl: './caesar-cipher.component.css'
})
export class CaesarCipherComponent {
  savedInput: string = ''; // Variable to store the saved input
  test: any;
  type:string="";

  saveInput(value: string): void {
    this.savedInput = value; // Save the input value to the variable
  }
  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
    for (let i = 0; i < value.length; i++){
      this.test=value.charCodeAt(i);

      if(this.test>=1 && this.test<=47){
        if(this.test>=45 && this.test<=47){
          this.test=this.test-47
        }
      }else if(this.test>=48 && this.test<=57){
        if(this.test>=55 && this.test<=57){
          this.test=this.test-10
        }
      }else if(this.test>=58 && this.test<=64){
        if(this.test>=62 && this.test<=64){
          this.test=this.test-7
        }
      }else if(this.test>=65 && this.test<=90){
        if(this.test>=88 && this.test<=90){
          this.test=this.test-26
        }
      }else if(this.test>=91 && this.test<=96){
        if(this.test>=94 && this.test<=96){
          this.test=this.test-6
        }
      }else if(this.test>=97 && this.test<=122){
        if(this.test>=120 && this.test<=122){
          this.test=this.test-26
        }
      }else if(this.test>=123 && this.test<=225){
        if(this.test>=223 && this.test<=225){
          this.test=this.test-133
        }
      }
      this.test=this.test+3;
      this.savedInput += String.fromCharCode(this.test)
    
    }
    console.log("final output is :",this.saveInput)     
  }
  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    for (let i = 0; i < value.length; i++){
      this.test=value.charCodeAt(i);

      if(this.test>=1 && this.test<=47){
        if(this.test>=1 && this.test<=3){
          this.test=this.test+47
        }
      }else if(this.test>=48 && this.test<=57){
        if(this.test>=48 && this.test<=50){
          this.test=this.test+10
        }
      }else if(this.test>=58 && this.test<=64){
        if(this.test>=58 && this.test<=60){
          this.test=this.test+7
        }
      }else if(this.test>=65 && this.test<=90){
        if(this.test>=65 && this.test<=67){
          this.test=this.test+26
        }
      }else if(this.test>=91 && this.test<=96){
        if(this.test>=91 && this.test<=93){
          this.test=this.test+6
        }
      }else if(this.test>=97 && this.test<=122){
        if(this.test>=97 && this.test<=99){
          this.test=this.test+26
        }
      }else if(this.test>=123 && this.test<=225){
        if(this.test>=123 && this.test<=125){
          this.test=this.test+133
        }
      }


      this.test=this.test-3;
      this.savedInput += String.fromCharCode(this.test)
      
    }
    console.log("final output is :",this.saveInput) 
  }

}
