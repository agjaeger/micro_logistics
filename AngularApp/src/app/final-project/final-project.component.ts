import { Component, OnInit } from '@angular/core';
import {SiteUser} from '../data-classes';
import {MicroLogisticsApiService} from '../micro-logistics-api.service';
import {Router} from '@angular/router';
import {AuthService} from '../user-management/auth/services/auth.service';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-final-project',
  templateUrl: './final-project.component.html',
  styleUrls: ['./final-project.component.css']
})
export class FinalProjectComponent implements OnInit {
    firstName: string;
    lastName: string;
    favoriteNumber: number;

    realNumber = getRandomInt(1, 100);

    errorMessage = '';
    success = false;

    constructor(
        private apiService: MicroLogisticsApiService,
    ) {}

    ngOnInit(): void {}


    submitForm() {
      this.errorMessage = "";
      this.success = false;

      this.apiService.submitFinalProjectForm(this.firstName, this.lastName, this.favoriteNumber).subscribe(
          (result) => {
              console.log("RESULT!");
              console.log(result);
              console.log(this.realNumber);
              this.success = true;
          }, (error) => {
              this.errorMessage = "Error Submitting Form. Please Try Again";
          }
      );
    }


}
