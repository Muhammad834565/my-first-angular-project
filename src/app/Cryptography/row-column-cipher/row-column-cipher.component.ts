import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-row-column-cipher',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './row-column-cipher.component.html',
  styleUrl: './row-column-cipher.component.css'
})
export class RowColumnCipherComponent {
  

  savedInput: string = ''; // Variable to store the saved input
  type:string="";
  temp:string="";

  encode(value:string):void{
    this.type="encoded";
    this.savedInput= '';
    
      let c=0
      let d=0
      var nestedArray: string[][] =[['6','3','2','4','1','5']]
      for (let i = 0; i <= value.length/6; i++) {
        c=c+1
        const row = [];  // Create a new row
        for (let j = 0; j <= 5; j++) {
          if (value[d]==undefined){
            var b="$"
          }
          else{
            var b = value[d]
          }
          
          d=d+1
          row.push(b);  // Add values to the row (0, 1, 2, 3, 4, ...)
        }
        nestedArray.push(row);  // Push the row into the nested array
      
    }
    var k: number;
    for (let i = 0; i < nestedArray[0].length; i++){
      var e = (i+1).toString()
      
      for (var k = 0; k < nestedArray[0].length; k++){
        if (nestedArray[0][k]==e){
          break
        }
      }

      for (let j = 1; j < nestedArray.length; j++){
        this.savedInput=this.savedInput+nestedArray[j][k]
      }
    } 
    
    console.log(this.savedInput);


    }




  decode(value:string):void{
    this.type="decoded";
    this.savedInput= '';
    var nestedArray: string[][] =[['6','3','2','4','1','5']]

    let d=0
    for (let i = 0; i < value.length/6; i++) {
      const row = [];  // Create a new row
      for (let j = 0; j <nestedArray[0].length; j++) {
        row.push('$');  // Add values to the row (0, 1, 2, 3, 4, ...)
      }
      nestedArray.push(row);  // Push the row into the nested array
    
  }

    for (let i = 0; i <= nestedArray[0].length; i++) {
      var e = (i+1).toString()
      
      for (var k = 0; k < nestedArray[0].length; k++){
        if (nestedArray[0][k]==e){
          break
        }
      }
      for (let j = 1; j <=value.length/6 ; j++) {
        nestedArray[j][k]=value[d]
        d=d+1
      }
      
  }

  
  for (let i = 1; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[0].length; j++) {
      if (nestedArray[i][j]=="$"){
        break
      }
      else{
        this.savedInput=this.savedInput+nestedArray[i][j]
      }
      
      d=d+1
    }
  
}
  console.log(this.savedInput)
}
}

