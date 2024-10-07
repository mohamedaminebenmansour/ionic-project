import { Component, OnInit } from '@angular/core';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private students: StudentsService) {}
  async ngOnInit() {
    await this.students.init();
  }
}
