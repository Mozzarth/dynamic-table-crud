import { ConfiguracionService } from '../services/configuracion.service';
import { TableDetail } from '../services/IConfiguracion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  table: { id: number, name: string }[] = []
  currentTable: TableDetail | undefined = undefined
  tables: TableDetail[] = []

  constructor(private service: ConfiguracionService) { }

  ngOnInit(): void {
    this.service.getTableDetails()
      .subscribe(data => {
        this.tables = data
        this.table = data.map(t => ({ id: t.id, name: t.name }))
      }, e => {
        // Manejo de error
        console.error(e)
      })
  }

}
