import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { CalendarEventModule } from 'src/app/calendar-event/calendar-event.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CalendarModule
{
  public events = [];
  public dateCurrent:Date = new Date();
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

  //generate a event on calendar

  addEvent(title,subTitle,description,order,hash)
  {
    let event = new CalendarEventModule();
    event.setTitle(title);
    event.setSubTitle(subTitle);
    event.setDescription(description);
    event.setOrder(order);
    event.setHash(hash);
    this.events.push(event);
  }
  //get events by index of the day
  getEventsByIndexDay(index)
  {
    let retEvents = [];
    let checkHash = this.getCurrentDayHashByIndex(index);
    for(let event of this.getEvents())
    {
      if(event.getHash() == checkHash)
      {
        retEvents.push(event);
      }
    }

    retEvents.sort(function(a, b) {
      return a.getOrder() - b.getOrder();
    });
    return retEvents;
  }
  //get current hash day
  getCurrentDayHashByIndex(index)
  {
    let auxDate = new Date(this.dateCurrent.getTime()+(index*24*60*60*1000));
    return auxDate.getDate()+"-"+(auxDate.getMonth()+1)+"-"+auxDate.getFullYear();
  }

  getEvents()
  {
    return this.events;
  }

}
