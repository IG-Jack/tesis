import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
@ViewChild("swiper")
swiperRef:ElementRef   | undefined;
swiper?:Swiper;

constructor(private router: Router) {}

  segmentChanged(event:CustomEvent) {
    const selectedPage = event.detail.value;  // Get the selected page's value
    this.router.navigate([selectedPage]);  // Use the router to navigate to the selected page
  }
swiperReady(){

  this.swiper=this.swiperRef?.nativeElement.swiper;

}
goNext(){  
this.swiper?.slideNext();
}
goPrev(){
  this.swiper?.slidePrev();

}
 swiperSlideChanged(e:any){
console.log("changed",e);
 } 
   
  }