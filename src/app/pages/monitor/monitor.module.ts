import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { MonitorRoutingModule } from './monitor-routing.module';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  imports: [
    CommonModule,
    MonitorRoutingModule,
    NzEmptyModule
  ],
  declarations: [MonitorComponent]
})
export class MonitorModule { }
