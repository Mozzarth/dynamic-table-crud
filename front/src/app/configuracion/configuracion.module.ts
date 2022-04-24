import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ConfiguracionComponent } from './configuracion.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    ConfiguracionComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    DropDownsModule,
    HttpClientModule,
    ConfiguracionRoutingModule,
  ]
})
export class ConfiguracionModule { }
