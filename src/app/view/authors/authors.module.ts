import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './page/authors.component';


@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
