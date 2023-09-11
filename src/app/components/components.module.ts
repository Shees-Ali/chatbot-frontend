import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
