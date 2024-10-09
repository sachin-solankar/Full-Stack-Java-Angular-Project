import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JavaServiceService } from 'src/app/java-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  constructor(private service:JavaServiceService,private router:Router){}
  course={
    id :'',
    title:'',
    description:''
  }

  onSubmit(){
    this.service.addCourse(this.course).subscribe({
      next:(data)=>
      {
        this.router.navigate(['/courselist'])
      },
      error:(error)=>{
        alert(error)
      }
  })
    console.warn(this.course)
  }
  
}
