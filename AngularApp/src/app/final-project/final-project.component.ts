import { Component, OnInit } from '@angular/core';
import {SiteUser} from '../data-classes';
import {MicroLogisticsApiService} from '../micro-logistics-api.service';
import {Router} from '@angular/router';
import {AuthService} from '../user-management/auth/services/auth.service';


@Component({
  selector: 'app-final-project',
  templateUrl: './final-project.component.html',
  styleUrls: ['./final-project.component.css']
})
export class FinalProjectComponent implements OnInit {

    firstName: string;
    lastName: string;
    favouriteTVShow: string;

    errorMessage = '';

    constructor(
        private apiService: MicroLogisticsApiService,
    ) {}

    ngOnInit(): void {}


    submitForm() {
      // TODO: client-side password verification
      this.apiService.registerUser(this.newUser).subscribe(
        data => {
          this.authService.login({username: this.newUser.email, password: this.newUser.password}).subscribe(
            () => {
              // This is the success function, so that means we should redirect to /home
              this.router.navigate(['/home']);
            }, () => {
              // This is the error function and means that the authentication failed
              // TODO: Treat invalid credentials differently from a network problem
            }
          );
        }, error => {
          if (error.error.email && error.error.email === 'This field must be unique.') {
            this.errorMessage = 'That email address is already in use';
          } else {
            console.log(error.error);
            this.errorMessage = 'There is an error in your form. Please try again.';
          }
        }
      );
    }


}
