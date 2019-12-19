import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  confirmPassword: string;
  passwordMatch: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    let registerUserData = {
      email: this.email,
      password: this.password
    };

    if(this.passwordMatch) {
      this.authService.registerUser(registerUserData)
        .subscribe((res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        });
    }
  }

  comparePassword() {
    if(this.password !== this.confirmPassword) {
      this.passwordMatch = false;
    } else {
      this.passwordMatch = true;
    }
  }
}
