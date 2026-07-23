import { Component } from '@angular/core';
import { Signin } from "../signin/signin";
import { User } from '../signin/models/User';
import { JsonPipe } from '@angular/common';
import { SensitiveDataPipe } from '../utils/pipes/SensitiveDataPipe';

@Component({
  selector: 'app-content',
  imports: [Signin, JsonPipe, SensitiveDataPipe],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class ContentComponent {
  submitted: User | null = null;

  setSubmitted(record: User | null) {
    this.submitted = record;
  }
}
