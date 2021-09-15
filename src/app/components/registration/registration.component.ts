import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: any = {
    username: null,
    password: null,
    email: null
  };
  status = false;
  errorMessage = '';

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit(): void {
  }

  public signUp(): void {
    const {username, email, password} = this.form;
    this.authService.registration(username, password, email).subscribe(
      data => {
        console.log(data);
        this.status = true;
      },
      err => {
        this.errorMessage = err.error.message;
        this.status = false;
      }
    );

  }

}
