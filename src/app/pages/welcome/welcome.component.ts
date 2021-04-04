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

    this.fillCalendar();

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

  fillCalendar()
  {

    this.calendarObject.addEvent("calen 1","subText","Lorem Lorem Macu Macu",1,"7-4-2021");
    this.calendarObject.addEvent("calen 3","subText","Lorem Lorem Macu Macu",1,"8-4-2021");
    this.calendarObject.addEvent("calen 2","subText","Lorem Lorem Macu Macu",2,"8-4-2021");

  }



}
