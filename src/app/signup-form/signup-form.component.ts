import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  formBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]], 
    email: ['', [Validators.required, Validators.email]],
  })

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Et un gobelin de plus dans mon armée !', this.signUpForm.value);
    } else {
      console.log('Kobold en vue, sortez les arbalètes.')
    }
  }
}
