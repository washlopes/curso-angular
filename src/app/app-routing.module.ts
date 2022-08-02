import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';

const routes: Routes = [
  { path: '', component: PrimeiroComponentComponent },
  { path: 'list', component: ListRenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
