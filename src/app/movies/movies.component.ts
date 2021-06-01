import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any
  movie : string ="baahubali"
  search:any = []
  isloading : boolean = true

  constructor( private http:HttpClient) { }

  getmovies()
  {
    this.isloading = true
    this.movies = this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=2b836fc3&s="+this.movie).subscribe(data => 
    {
      this.movies = data;
      console.log(data);
      this.search = this.movies.Search
      console.log(this.search);
      this.isloading = false
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

   this.getmovies();
  }

  
}
