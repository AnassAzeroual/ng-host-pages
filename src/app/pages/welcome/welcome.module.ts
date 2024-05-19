import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { FormsModule } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { WelcomeComponent } from './welcome.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  imports: [WelcomeRoutingModule, NzRateModule,NzEmptyModule, FormsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
