import { Component } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  constructor(private theme: ThemeService,private nzConfigService: NzConfigService) {}
  toggle() {
    const active = this.theme.getActiveTheme() ;
    if (active.name === 'light') {
      this.theme.setTheme('dark');
    } else {
      this.theme.setTheme('light');
    }
  }
}
