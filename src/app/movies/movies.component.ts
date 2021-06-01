import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any
  mname : any =""

  constructor( private http:HttpClient) { }

  getmovies()
  {
    this.movies = this.http.get<any>("http://www.omdbapi.com/?i=tt3896198&apikey=2b836fc3&t="+this.mname).subscribe(data => 
    {
      this.movies = data;
    },
    err =>
    {
      console.log(err);
    },
    () =>
    {
      console.log("Data fetched successfully");
    }
    )
  }
  

  ngOnInit(): void {

    this.http.get<any>(""+this.mname).subscribe(data => 
      {
        this.movies = data;
      })
    
  }

  
}
