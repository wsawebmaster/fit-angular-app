import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SigninService } from './services/SigninService';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
  providers: [SigninService]
})
export class Signin {
  @Input() email: string = '';
  @Input() phone: string = '';

  @Output() submittedControl = new EventEmitter<boolean>();

  constructor(private svc: SigninService) {}

  signIn() {
    const result = this.svc.signIn({ email: this.email, phone: this.phone });
    console.log(result);
    this.submittedControl.emit(true);
  }
}
