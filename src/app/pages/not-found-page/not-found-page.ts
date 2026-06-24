import { Component } from '@angular/core';
import { HomeHeader } from "../home-page/_widgets/home-header/home-header";

@Component({
  selector: 'app-not-found-page',
  imports: [HomeHeader],
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.scss',
})
export class NotFoundPage {}
