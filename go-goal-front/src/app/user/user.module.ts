import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoalsComponent } from './goals/goals.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    GoalsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
