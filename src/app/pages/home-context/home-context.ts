import { Component } from '@angular/core';
import { HomeHeader } from "../home-page/_widgets/home-header/home-header";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home-context',
  imports: [HomeHeader, RouterModule],
  templateUrl: './home-context.html',
  styleUrl: './home-context.scss',
})
export class HomeContext {}
