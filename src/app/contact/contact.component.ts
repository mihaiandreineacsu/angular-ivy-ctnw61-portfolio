import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint:
      'https://mihai-andrei-neacsu.developerakademie.com/assets/sendMail.php',

    body: (payload: any) => JSON.stringify(payload),

    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  constructor(private http: HttpClient, public navigation: NavigationService) {}

  ngOnInit() {}

  onSubmit(ngForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      // console.log(ngForm.form.value);
      // console.log(this.contact);
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    }
  }
}
