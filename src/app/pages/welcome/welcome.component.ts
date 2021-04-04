import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CalendarModule } from 'src/app/calendar/calendar.module';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  dateCurrent:Date = new Date();
  days = [0,1,2,3,4,5,6];
  calendarObject: CalendarModule = new CalendarModule();
  constructor() { }

  ngOnInit()
  {

  }

  //set Date one week back
  back()
  {
    this.calendarObject.decreaseWeek();
  }

  //set Date one week
  next()
  {
    this.calendarObject.increaseWeek();
  }



}
