import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, MatMenuModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
     fullName = "Hello";
     public successClass = "text-success";
     public hasError = true;
     public isSpecial = true;
     public heightletColor = 'orange';
     public messageClasses={
      "text-success": !this.hasError,
      "text-danger": !this.hasError,
      "text-special": !this.isSpecial
     }
    public titleColor={
      color:  "blue",
      fontStyle: "italic"
    }
}

