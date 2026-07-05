import { Component } from '@angular/core';
import { Signin } from "../signin/signin";

@Component({
  selector: 'app-content',
  imports: [Signin],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {}
