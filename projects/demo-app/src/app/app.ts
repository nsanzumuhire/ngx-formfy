import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormfyModule } from 'ngx-formfy';


@Component({
  selector: 'app-root',
  imports: [FormfyModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'demo-app for Ngx-formfy';
}
