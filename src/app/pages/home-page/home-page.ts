import { Component } from '@angular/core';
import { HomeHeader } from './_widgets/home-header/home-header';

@Component({
  selector: 'app-home-page',
  imports: [HomeHeader],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
