import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { JavaServiceService } from 'src/app/java-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {

  constructor(private route:ActivatedRoute,private service:JavaServiceService,private r:Router){}

  newId:any
   ngOnInit(){
        this.route.paramMap.subscribe((param)=>{
         this.newId=param.get('id')
         this.getCourse()
        })
   }
   
   getCourse(){
    this.service.getCourse(this.newId).subscribe((data)=>{
     this.course=data
     console.warn(data)
    })
   }

   course=
    {
      id:'',
      title:'',
      description:''
    }

    updateCourse(){
      this.service.updateCourse(this.course).subscribe((data)=>{
           this.r.navigate(['/courselist'])
      })
    }
   
}
