import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
})
export class TemaPage implements OnInit {

  darkMode: boolean = true;

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  ngOnInit() {
  }


  cambio() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );
    
  }




}
