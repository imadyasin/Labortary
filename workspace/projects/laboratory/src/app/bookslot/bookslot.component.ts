import { Component } from '@angular/core';
import { EmailService } from '../services/email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent {

  contactInfo: any = {
    // Initialize with  contact information
    name: '',
    number: '',
    email: '',
  };

  constructor(private emailService: EmailService, private router: Router
    ){}

  sendEmail()
  {

    this.emailService.sendEmail(this.contactInfo).subscribe(
      (response) => {

       response?alert('Thankyou! We have recieved your Booking'):alert('Error Booking Try Again')
       this.router.navigate(['/mainpage']);

     //  alert(response?'Email sent successfully':'error sending email')
     this.contactInfo.name=''
     this.contactInfo.number=''
     this.contactInfo.email=''

      },

    );
  }

}
