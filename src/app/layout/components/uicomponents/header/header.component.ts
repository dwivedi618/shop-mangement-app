import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFullScreen = true;
  serviceType: any;
  isDarkTheme: Observable<boolean>;
  constructor( private themeService : ThemeService) { }

  ngOnInit(): void {
    let service = localStorage.getItem('serviceType')
    this.serviceType = JSON.parse(service) ;
    this.isDarkTheme = this.themeService.isDarkTheme;

  }

  goBack(){
    window.history.back()
  }

  goFarward(){
    window.history.forward()

  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
