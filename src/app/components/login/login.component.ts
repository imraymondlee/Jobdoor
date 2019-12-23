import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    let loginUserData = {
      email: this.email,
      password: this.password
    };

    this.authService.loginUser(loginUserData)
      .subscribe((res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

}
