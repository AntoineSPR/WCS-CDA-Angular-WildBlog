import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactInfo } from '../models/contact-info.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactInfo: ContactInfo = {
    firstname: "",
    lastname: "", 
    email: ""
  }

  onSubmit(): void {
    console.log("Formulaire envoyé, mon vieux.");
    Object.entries(this.contactInfo).forEach(
      ([key, value]) => {
        console.log(`${key} : ${value}`);
      }
    )
  }
}
