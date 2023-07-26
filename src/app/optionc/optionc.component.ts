import { Component, OnInit } from '@angular/core';
import { BannersService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-optionc',
  templateUrl: './optionc.component.html',
  styleUrls: ['./optionc.component.sass']
})
export class OptioncComponent implements OnInit {
form:FormGroup
user:any


columnNames=['item','qty','item Cost','revised Item Cost','item ExpDate'];

userDetailsArray: any = [];
constructor(private bannersService: BannersService, private fb: FormBuilder) {
  this.form= this.fb.group({
    grnNumber:[''],
    date:[''],
    notes:[''],
    amount:[''],
    btchExpDate :[''],
    supplier:[''], 
    location:[''],
    transactionType:[''],
    item:[''],
    qty:[''],
    itemCost:[''],
    revisedItemCost:[''],
    itemExpDate:[''],
    storageBin:[''],
    cashAmount:[''],
    cardAmount:['']
  })
}

ngOnInit(): void {
  //  this.getData()
   this.submit()

 }

// getData() {
//   this.bannersService.query().subscribe((res: HttpResponse<any>) => {
//     this.user = res.body.data;
//     console.log(res.body);
//   });
// }
submit(){
  console.log(this.userDetailsArray)
}
add(){
  this.userDetailsArray.push(this.form.value)

}
}



