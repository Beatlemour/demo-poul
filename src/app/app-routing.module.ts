import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTableParentComponent } from './test-table-parent/test-table-parent.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-table', component: TestTableParentComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'form', component: FormComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
