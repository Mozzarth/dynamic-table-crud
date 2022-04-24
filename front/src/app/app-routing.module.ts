import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "configuracion", loadChildren: () => import("./configuracion/configuracion.module").then(m => m.ConfiguracionModule) },
  { path: "**", redirectTo: "configuracion" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
