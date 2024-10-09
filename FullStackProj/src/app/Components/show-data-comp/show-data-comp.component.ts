import { Component } from '@angular/core';
import { JavaServiceService } from '../../java-service.service';

@Component({
  selector: 'app-show-data-comp',
  templateUrl: './show-data-comp.component.html',
  styleUrls: ['./show-data-comp.component.css']
})
export class ShowDataCompComponent {
constructor(private servcie:JavaServiceService){}
info:any
ngOnInit(){
  this.servcie.getCourses().subscribe((data)=>{
    console.log(data);
    this.info=data

   
  })
}

deleteCourse(id:any){
  this.servcie.deleteCourse(id).subscribe(()=>{
    this.getCourses()
  })
}

getCourses(){
  this.servcie.getCourses().subscribe((data)=>{
    this.info=data
  })
}
}
