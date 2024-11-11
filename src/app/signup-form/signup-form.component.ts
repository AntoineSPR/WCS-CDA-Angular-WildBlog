import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  fb = inject(FormBuilder);

  signupForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.fb.group({
      password: ['', [Validators.required, this.securePasswordValidator()]],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator() })
  });

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Et un gobelin de plus dans mon armée !', this.signupForm.value);
    } else {
      console.log('Kobold en vue, sortez les arbalètes.')
    }
  }

  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';

      const hasUppercase = /[A-Z]/.test(value);
      const hasLowercase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;

      const passwordValid = hasUppercase && hasLowercase && hasNumber && hasSpecialChar && isValidLength;

      return passwordValid ? null : { securePassword: true };
    }
  }

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch: true };
    };
  }
}
