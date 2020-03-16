import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  get firstNameControl(): AbstractControl {
    return this.form ? this.form.get('firstName') : null;
  }

  get lastNameControl(): AbstractControl {
    return this.form ? this.form.get('lastName') : null;
  }

  get emailControl(): AbstractControl {
    return this.form ? this.form.get('email') : null;
  }

  get passwordControl(): AbstractControl {
    return this.form ? this.form.get('password') : null;
  }

  get confirmPasswordControl(): AbstractControl {
    return this.form ? this.form.get('confirmPassword') : null;
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

  getConfirmPasswordErrorMessage(): string {
    return this.confirmPasswordControl.hasError('required')
           ? 'Confirm password field is required'
           : '';
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit() {
    this.authService.setDataToLocalStorage(this.emailControl.value, this.passwordControl.value);
    this.authService.singUp(this.form.value).subscribe(data => {
      console.log(data);
    });
  }

}
