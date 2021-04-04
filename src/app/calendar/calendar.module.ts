import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CalendarModule
{

  dateCurrent:Date = new Date();
  days = [0,1,2,3,4,5,6];

  //set Date one week back
  decreaseWeek()
  {
    this.dateCurrent.setDate(this.dateCurrent.getDate() - 7);
  }

  //set Date one week
  increaseWeek()
  {
    this.dateCurrent.setDate(this.dateCurrent.getDate() + 7);
  }

  // this functions returns the correct dates,
  // they will be triggered when the next anf back functions are executed
  getCurrentStartDay()
  {
    return this.dateCurrent.getDate();
  }
  getCurrentEndDay()
  {
    let auxDate = new Date(this.dateCurrent.getTime()+(7*24*60*60*1000));

    return auxDate.getDate();
  }
  getCurrentStartMonth()
  {
    return environment.monthNames[this.dateCurrent.getMonth()];
  }
  getCurrentEndMonth()
  {
    let auxDate = new Date(this.dateCurrent.getTime()+(7*24*60*60*1000));
    return environment.monthNames[auxDate.getMonth()];
  }

  getDayBy(index)
  {
    let auxDate = new Date(this.dateCurrent.getTime()+((index)*24*60*60*1000));

    return auxDate.getDate();
  }
  getWeekDayBy(index)
  {
    let auxDate = new Date(this.dateCurrent.getTime()+((index)*24*60*60*1000));

    return environment.daysName[auxDate.getDay()];
  }

}
