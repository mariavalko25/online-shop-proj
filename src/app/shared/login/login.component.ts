import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  get emailControl(): AbstractControl {
    return this.form ? this.form.get('email') : null;
  }

  get passwordControl(): AbstractControl {
    return this.form ? this.form.get('password') : null;
  }

  getEmailErrorMessage(): string {
    return this.emailControl.hasError('required')
           ? 'Email field is required'
           : this.emailControl.hasError('email')
              ? 'Entered email is invalid'
              : '';
  }

  getPasswordErrorMessage(): string {
    return this.passwordControl.hasError('required')
           ? 'Password field is required'
           : this.passwordControl.hasError('minlength')
              ? `Password should be at least ${this.passwordControl.errors.minlength.requiredLength} chars long.
              You entered ${this.passwordControl.errors.minlength.actualLength} chars`
              : '';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(event: Event): void {
    const value = window.btoa(`${this.emailControl.value}:${this.passwordControl.value}`);
    if (value === this.authService.getDataFromLocalStorage()) {
      this.authService.redirectTo('category');
    }
  }

}
