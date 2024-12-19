import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Cast 'window' to 'any' to avoid TypeScript errors
    (window as any)['handleCredentialResponse'] = (response: any) => {
      console.log('Google Response:', response);
      const idToken = response.credential;
      this.loginWithGoogle(idToken);
    };

    // Initialize Google Sign-In
    (window as any)['google']?.accounts?.id.initialize({
      client_id: '87196789054-d3f2v6s2dsmc1vb9c8af1mrc6mrqvjms.apps.googleusercontent.com',
      callback: (window as any)['handleCredentialResponse']
    });

    // Prompt the user to sign in
    (window as any)['google']?.accounts?.id.prompt();
  }

  // Handle the Google Login ID Token
  loginWithGoogle(idToken: string): void {
    console.log('Google ID Token:', idToken);
    // Send the ID token to your backend for verification
  }
}
