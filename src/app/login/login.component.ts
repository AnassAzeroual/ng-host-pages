import { Component } from '@angular/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [NzEmptyModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() { }
}
