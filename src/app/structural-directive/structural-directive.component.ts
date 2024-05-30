import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, MatMenuModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
    displayName = true;

    color = "white";

    listColors =["red","blue","orange","pink"];
}
