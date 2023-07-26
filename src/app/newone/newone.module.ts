

import { ComponentsModule } from "../shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import {NewOneRoutingModule } from "./newone-routing.module";
import { NewoneComponent } from "./newone.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OptionCRoutingModule } from "../optionc/optionc-routing.module";
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterPipe } from "../shared/utils/search";
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [NewoneComponent,FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
    NewOneRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
})
export class NewOneModule {}
