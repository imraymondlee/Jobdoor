import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.registerUserData).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
