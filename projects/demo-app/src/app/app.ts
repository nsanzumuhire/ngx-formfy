import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormfyModule } from 'ngx-formfy';


@Component({
  selector: 'app-root',
  imports: [FormfyModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'demo-app for Ngx-formfy';
  delayedProps: any[] = []


  ngOnInit(): void {
    setTimeout(() => {
      this.delayedProps = [
        {
          label: 'National ID',
          value: 'National ID'
        },
        {
          label: 'Passport',
          value: 'Passport'
        },
        {
          label: 'Other',
          value: 'Other'
        }
      ];
      console.log('---delayedProps---', this.delayedProps)
    }, 10000)
  }
}
