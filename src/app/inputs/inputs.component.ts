import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormArray, FormControl, NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Tasks} from '../taks'

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  rform:any=FormGroup;
  todotasks:any;

  constructor(public fb:FormBuilder , private as:AuthService) { }

  ngOnInit(): void {
    this.as.getList().subscribe((res:any) => { },(err: any) => {
      console.log('Server Busy please Try Again Later');
      })
    this.rform= new FormGroup({
      'date'  : new FormControl(),
      'id'    : new FormControl(),
      'tasks' : new FormArray([
        new FormControl()
      ])
    })
  }

  addTodoList(form:NgForm){
    this.as.postList(form.value).subscribe(data=>{
      this.todotasks=data
     })
    console.log(form.value);
    const formData = form.value;
    console.log(formData);
  }

  getTasks():FormArray {
    return this.rform.get('tasks') as FormArray;
  }


  addTask(){
    let tasksArray = this.rform.get('tasks') as FormArray;
    let newTask = new FormControl();
    tasksArray.push(newTask);
  }

  
}
