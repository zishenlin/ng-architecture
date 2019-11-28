import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BaseLayoutComponent,
} from './layouts';

const MODULES = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];

const COMPONENTS = [
  BaseLayoutComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
  ],
  providers: [
  ]
})
export class SharedModule { }
