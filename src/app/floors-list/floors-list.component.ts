import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floors-list',
  standalone: true,
  imports: [FormsModule, CommonModule, FloorsListComponent],
  templateUrl: './floors-list.component.html',
  styleUrl: './floors-list.component.css'
})
export class FloorsListComponent {
  onSearch(){
    console.log("hi");
  }
}
