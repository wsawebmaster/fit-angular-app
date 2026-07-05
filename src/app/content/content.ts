import { Component } from '@angular/core';
import { Signin } from "../signin/signin";

@Component({
  selector: 'app-content',
  imports: [Signin],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class ContentComponent {
  submitted: boolean = false;

  setSubmitted(status: boolean) {
    this.submitted = status;
  }
}
