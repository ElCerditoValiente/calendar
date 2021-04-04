import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CalendarEventModule
{
  private title:string = "";
  private subTitle:string = "";
  private description:string = "";
  private hash:string = "";
  private order:number = 0;
  private color:string="";

  public getTitle()
  {
    return this.title;
  }

  public setTitle(title)
  {
    this.title = title;
    return this;
  }

  public getSubTitle()
  {
    return this.subTitle;
  }

  public setSubTitle(subTitle)
  {
    this.subTitle = subTitle;
    return this;
  }

  public getDescription()
  {
    return this.description;
  }

  public setDescription(description)
  {
    this.description = description;
    return this;
  }

  public getHash()
  {
    return this.hash;
  }

  public setHash(hash)
  {
    this.hash = hash;
    return this;
  }
  public getOrder()
  {
    return this.order;
  }

  public setOrder(order)
  {
    this.order = order;
    return this;
  }

  public getColor()
  {
    return this.color;
  }

  public setColor(color)
  {
    this.color = color;
    return this;
  }



}
