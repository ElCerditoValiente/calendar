import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CalendarModule } from 'src/app/calendar/calendar.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  dateCurrent:Date = new Date();
  days = [0,1,2,3,4,5,6];
  calendarObject: CalendarModule = new CalendarModule();
  isVisible = false;
  modalContent = "";
  modalColor = "";
  constructor()
  {


  }

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

    this.calendarObject.addEvent("calen 1","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"7-4-2021","#F8C471");
    this.calendarObject.addEvent("calen 3","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"8-4-2021","#48C9B0");
    this.calendarObject.addEvent("calen 2","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",2,"8-4-2021","#C39BD3");

    this.calendarObject.addEvent("calen 1","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"5-4-2021","#F8C471");
    this.calendarObject.addEvent("calen 3","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"4-4-2021","#48C9B0");
    this.calendarObject.addEvent("calen 2","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"10-4-2021","#C39BD3");

    this.calendarObject.addEvent("calen 1","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",2,"5-4-2021","#F8C471");
    this.calendarObject.addEvent("calen 3","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",2,"4-4-2021","#48C9B0");
    this.calendarObject.addEvent("calen 2","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",3,"4-4-2021","#C39BD3");

    this.calendarObject.addEvent("calen 1","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"6-4-2021","#F8C471");
    this.calendarObject.addEvent("calen 3","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",2,"6-4-2021","#48C9B0");
    this.calendarObject.addEvent("calen 2","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",3,"6-4-2021","#C39BD3");

    this.calendarObject.addEvent("calen 1","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"10-4-2021","#F8C471");
    this.calendarObject.addEvent("calen 3","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",2,"10-4-2021","#48C9B0");
    this.calendarObject.addEvent("calen 2","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"11-4-2021","#C39BD3");

    this.calendarObject.addEvent("calen 1","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"12-4-2021","#F8C471");
    this.calendarObject.addEvent("calen 3","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",2,"12-4-2021","#48C9B0");
    this.calendarObject.addEvent("calen 2","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"14-4-2021","#C39BD3");

    this.calendarObject.addEvent("calen 1","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"15-4-2021","#F8C471");
    this.calendarObject.addEvent("calen 3","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",1,"16-4-2021","#48C9B0");
    this.calendarObject.addEvent("calen 2","subText","<h1>Lorem Lorem Macu Macu</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis vel lacus elementum pellentesque. Morbi finibus aliquam turpis sagittis ultrices. Integer lobortis neque blandit turpis sollicitudin, nec tincidunt massa cursus. Duis lacus lectus, feugiat in molestie eget, tincidunt sit amet justo. Maecenas quis elementum mauris. Donec feugiat euismod venenatis. Morbi eget massa est. Vivamus quam nunc, bibendum id elit at, tempus volutpat ex.</p>",2,"15-4-2021","#C39BD3");

  }


  showModal(content,color): void {

    this.isVisible = true;
    this.modalContent = content;
    this.modalColor = color;
  }

  closeModal()
  {
    this.isVisible = false;
  }

}
