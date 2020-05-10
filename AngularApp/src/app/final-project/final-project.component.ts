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
      this.apiService.submitFinalProjectForm(this.firstName, this.lastName, this.favouriteTVShow).subscribe(
          (result) => {
              console.log("RESULT! " + result["favourite_field"]);
          }
      );
    }


}
