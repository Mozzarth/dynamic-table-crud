import { Component, Input, OnInit } from '@angular/core';
import { TableDetail } from 'src/app/services/IConfiguracion';

@Component({
  selector: 'configuracion-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() TableDetail: TableDetail | undefined = undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}
