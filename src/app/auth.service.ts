import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mname :any = ""

  constructor(public http:HttpClient) { }

  getList(){
    return this.http.get("http://localhost:3000/todoList")
  }

  getlist(date:any){
    return this.http.get("http://localhost:3000/todoList?date="+date)
  }

  postList(date:any) {
    return this.http.post("http://localhost:3000/todoList",date)
  }

  UpdateTask(id:number,task:any)
  {
    return this.http.put(`${environment.todoUrl}/${id}`,task)
  }

  deleteList(id:any) {
    return this.http.delete("http://localhost:3000/todoList",id)
  }
  // Hospital Things

  getdetails() 
  {
    return this.http.get("http://localhost:3000/Hospital")
  }

  updatepatient(id:number,patient:any)
  {
    return this.http.put(`${environment.baseUrl}/${id}`,patient)
  }

  

}