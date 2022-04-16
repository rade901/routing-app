import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path: '', component:  FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
