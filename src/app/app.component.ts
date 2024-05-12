import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  constructor(private theme: ThemeService,private nzConfigService: NzConfigService) {}

  ngOnInit() {
    window.addEventListener('beforeunload', (event) => {
      event.returnValue = 'lol'; // Optional: Display a confirmation message (see notes below)
      // Redirect user to your desired URL:
      window.location.href = 'https://anassazeroual.github.io/ng-host-pages/';
    });
  }

  toggle() {
    const active = this.theme.getActiveTheme() ;
    if (active.name === 'light') {
      this.theme.setTheme('dark');
    } else {
      this.theme.setTheme('light');
    }
  }

  ngOnDestroy() {
    window.removeEventListener('beforeunload', (event) => { /* ... */ });
  }
  
}
