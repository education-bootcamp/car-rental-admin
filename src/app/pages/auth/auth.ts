import { Component } from '@angular/core';
import { AuthHeader } from './_widgets/auth-header/auth-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [AuthHeader, RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {}
