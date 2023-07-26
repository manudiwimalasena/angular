import { Component, OnInit } from '@angular/core';
import { BannersService } from '../shared/api.service';
import { HttpResponse } from '@angular/common/http';
import autoTable from 'jspdf-autotable'
import jsPDF from 'jspdf';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.sass']
})
export class NewoneComponent implements OnInit {
  form1: FormGroup;
  employee: any;
  arrayId=0;
intArray=[1,4,5,6,7]
  dataSource: any;
  cols = [
    { field: "itemCode", header: "itemCode" },
    { field: "itemName", header: "itemName" },
    { field: "itemUnitPrice", header: "itemUnitPrice" },
    { field: "stockQty", header: "stockQty" }
  ];

  displayedColumns = ['itemCode', 'itemName', 'stockQty', 'itemImages', 'contentType', 'itemUnitPrice', 'itemSpecialPrice', 'itemUnit', 'itemMaxQty', 'itemMinQty', 'itemSteps'];
  columnNames = ['firstname', 'lastname', 'address','gender','shritsize'];
  items: any = [];
  itemImages: any = [];
  searchText: any;
  exportColumns: any;
  array2: any = [{
    "firstname": "",
    "lastname": "",
    "address": "",
    "gender":"",
    "shirtsize":""
  }];
  data: any;

  constructor(private bannersService: BannersService, private fb: FormBuilder) {
    this.form1 = this.fb.group({
      firstname: [''],
      lastname: [''],
      address: [''],
      gender:[''],
      shirtsize:['']

    })
  }

  ngOnInit(): void {
     this.getData()
     this.calculation()

  }
  getData2() {
    this.bannersService.query().subscribe((res: HttpResponse<any>) => {
      this.array2 = res.body;
      this.itemImages = res.body.data;
      res.body.forEach((element, index) => {
        console.log(element.itemImages[index]?.url)
      }
      );

    });
  }

  exportPdf() {
    const doc = new jsPDF('l', 'mm', 'a4');

    const head = [['itemCode', 'itemName', 'stockQty']];

    autoTable(doc, {
      head: head,
      body: this.toPdfFormat(),
      didDrawCell: (data) => { },
    });
    doc.save('tutorials.pdf');
  }
  toPdfFormat() {
    let data = [];
    for (var i = 0; i < this.items.length; i++) {
      data.push([
        this.items[i].itemCode,
        this.items[i].itemName,
        this.items[i].stockQty,
      ]);
    }
    return data;
  }
  submit() {
    // console.log(this.form1.value.firstname)
    if (this.form1.value.firstname == "" || this.form1.value.lastname == "" || this.form1.value.address == "") {
      console.log("empty data")

    } else {
      this.array2.push(this.form1.value)
      console.log(this.array2)
      this.form1.reset();


     
    }
  }
print(data:any){
  const index: number = this.array2.indexOf(data);//get index by passing the concern row data
  if (index !== -1) {
    this.array2.splice(index, 1);
  }
}
calculation(){
  console.log(this.intArray[this.intArray.length-1])
  console.log((((this.intArray[0]+this.intArray[this.intArray[this.intArray.length-1]])/2)*3)+2)
  console.log((this.intArray[0]+this.intArray[this.intArray.length-1])%2==0 ? "even" : "odd");
  // if((this.intArray[0]+this.intArray[this.intArray.length-1])%2==1){
  //   console.log("odd")
  // }else{
  //   console.log("even")    
  // }
}

  getData() {
    this.bannersService.query().subscribe((res: HttpResponse<any>) => {
      this.employee = res.body.data;
      console.log(res.body);
    });
  }
  
}


