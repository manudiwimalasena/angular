import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { ComponentsModule } from "../shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { OptioncComponent } from "./optionc.component";
import {OptionCRoutingModule } from "./optionc-routing.module";
import { TableModule } from 'primeng/table';
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  declarations: [OptioncComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
    OptionCRoutingModule,
    TableModule,
    MatDatepickerModule,
    
  ],
  providers: [],
})
export class OptionCModule {}
