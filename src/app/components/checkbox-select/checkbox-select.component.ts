import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-select',
  templateUrl: './checkbox-select.component.html',
  styleUrls: ['./checkbox-select.component.scss']
})
export class CheckboxSelectComponent {
  foods = [
  {
    id:1, select : false, name :'dumpling'
  },
  {
    id:2, select : true, name :'burger'
  },
  {
    id:3, select : true, name :'sandwitch'
  }
 ]

 onChangeFood($event:any){
  const id = $event.target.value;
  const isChecked = $event.target.checked;

  this.foods = this.foods.map((data)=>{
    if(data.id == id){
      data.select = isChecked
      return data
    }
    return data
  });
  console.log(this.foods)
 }
}
