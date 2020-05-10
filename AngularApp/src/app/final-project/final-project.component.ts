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
    favoriteNumber: number;

    errorMessage = '';
    success = false;

    constructor(
        private apiService: MicroLogisticsApiService,
    ) {}

    ngOnInit(): void {}


    submitForm() {
      // TODO: client-side password verification
      this.errorMessage = "";
      this.apiService.submitFinalProjectForm(this.firstName, this.lastName, this.favoriteNumber).subscribe(
          (result) => {
              console.log("RESULT!");
              console.log(result);
              this.success = true;
          }, (error) => {
              this.errorMessage = "Error Submitting Form. Please Try Again";
          }
      );
    }


}
