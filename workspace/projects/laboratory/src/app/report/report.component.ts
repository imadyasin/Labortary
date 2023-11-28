import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {UserfileService} from '../services/userfile.service'
import {ReCaptcha2Component} from 'ngx-captcha';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
  protected searchForm !: FormGroup;
  files: any[] = [];
  error1:String =''
  captchaSuccess: boolean = false;

  sitekey:string = "6Lct0x0pAAAAAAI3Gk0ZwVtZFHKSptryfIbE8WVF";
  constructor(private fb: FormBuilder,private http: HttpClient, private UserfileService: UserfileService){

    this.searchForm = this.fb.group({
    userEmail: ['', Validators.required],
    recaptcha: ['',Validators.required]

});
}

onCaptchaSuccess() {
  // Set the flag to true when reCAPTCHA is successfully completed
  this.captchaSuccess = true;
  console.log(this.captchaSuccess);
  // Clear any previous error message
    this.success();

}

success() {
  // Check reCAPTCHA state directly
  const recaptchaValue = this.searchForm.get('recaptcha')?.value;

  if (recaptchaValue) {
    //console.log("true");
    this.searchDocuments();
  } else {
    alert("Please click the Recaptcha");
    //console.log("false");
  }
}
  searchDocuments() {

    this.files = [];
    this.error1 = '';
    //console.log(this.searchForm.value);
    this.http.get<any[]>(`http://localhost:8082/file/${this.searchForm.value.userEmail}`).subscribe(
      (data) => {
        this.files =[...this.files,data];
        console.log(this.files);
        // Reset the email input back to blank
        this.searchForm.patchValue({
          userEmail: ''
        });
        this.searchForm.reset();
        this.captchaElem.resetCaptcha();

      },
      (error) => {
        this.error1= error
        this.searchForm.patchValue({
          userEmail: ''
        });

        this.searchForm.reset();
        // Reload the reCAPTCHA
        this.captchaElem.resetCaptcha();
        // Reset the reCAPTCHA success state
        this.captchaSuccess = false;
      }
    );
  }


}
