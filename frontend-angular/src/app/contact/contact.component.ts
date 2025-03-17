import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {name: '', email: '', message: ''}

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('http://127.0.0.1:8000/contact/', this.formData).subscribe(
      response => {
        console.log('Message sent successfully:', response);
        alert('Message sent successfully!');
      },
      error => {
        console.error('Error sending message:', error);
      }
    );
  }

}
