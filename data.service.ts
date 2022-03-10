import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
arr1:any[]=[];
name:any;
email:any;
image:any;
like:number=0;
  constructor() { 
    this.arr1=[
      {
        id:Math.floor(Math.random()*999),
        name:"Ram",
        email:"r@gmail.com",
        image:'https://w0.peakpx.com/wallpaper/573/671/HD-wallpaper-fantasy-animals-wolf-night.jpg',
        like:0
      },
      {
        id:Math.floor(Math.random()*999),
        name:"Lion",
        email:"L@gmail.com",
        image:"https://c4.wallpaperflare.com/wallpaper/151/659/658/fantasy-animals-wolf-animal-night-wallpaper-preview.jpg",
        like:0
      },
      {
        id:Math.floor(Math.random()*999),
        name:"Lion2",
        email:"L2@gmail.com",
        image:"https://s1.1zoom.me/big0/793/Tigers_Painting_Art_Night_Glance_535374_1280x853.jpg",
        like:0
      },
      {
        id:Math.floor(Math.random()*999),
        name:"Lion3",
        email:"This is a jobless animal, do nothing all they only sit around",
        image:"https://wallpaperaccess.com/full/83315.jpg",
        like:0
      }
    ]
    // this.like=0;
  }
  submitHandle=()=>{
    // this.arr1=[...this.arr1];
    this.arr1.push({id:Math.floor(Math.random()*999),name:this.name,email:this.email,image:this.image,like:0});
    // this.arr1=[...this.arr1];
    console.log(this.arr1);
    console.log("clicked")
    // return this.arr1;
  }
  // arr4:any[]=[...this.arr1]
 
}
