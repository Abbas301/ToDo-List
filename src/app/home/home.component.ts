import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public as:AuthService) { }
   todos:any = [];
   date:any=[];
  
   select: any;
   index: any;
   id!:number;
   updateSelect:any;

  ngOnInit(): void {
    this.createTask(this.date);
  }

editTask(index:any,id:number){
  console.log(index);
  console.log(id);
  const UpdatedTask = this.date;
  this.index = index;
  this.id = id;
  console.log(UpdatedTask);
  for( let obj in UpdatedTask){
  this.select = UpdatedTask[obj].tasks[index];
  console.log(this.select);
  }
}

  deleteTask(index:any,id:number){
    console.log(index);
    console.log(id);
    const altData = this.date;
    console.log(altData);
    for( let obj in altData){
      console.log(altData[obj].tasks[index]);
      altData[obj].tasks.splice(index,1);
    }
    console.log(altData);
    let newData = new Object();
    newData = altData[0];
    console.log('below is the output for converting array into object');
    
    console.log(newData);
    
    this.as.UpdateTask(id,newData).subscribe((res) => {
    })
    console.log(altData.date);
  }

  createTask(d:any){
    this.as.getList().subscribe(data=>{
      this.todos=data
      console.log(data);
    })
    this.as.getlist(d).subscribe(data=>{
      this.date=data
      console.log(this.date);
    })
    console.log(d);    
  }

  remove(index:any){
    this.as.deleteList(index).subscribe(res=>{
      this.todos.splice(this.todos.indexOf(index),1)
    })
  }

  onTaskSubmit(){
    console.log(this.updateSelect);
    const updateTask = this.date
    for( let obj in updateTask){
      console.log(updateTask[obj].tasks[this.index]);
      updateTask[obj].tasks.splice(this.index,1,this.updateSelect);
      console.log(updateTask);
    }
    let newData = new Object();
    newData = updateTask[0];
    console.log('below is the output for converting array into object');
    
    console.log(newData);
    // console.log(updateTask);
    this.as.UpdateTask(this.id,newData).subscribe((res) => {})
    console.log(this.id);

  }



}



