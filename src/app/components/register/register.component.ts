import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.registerUserData)
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }
}
