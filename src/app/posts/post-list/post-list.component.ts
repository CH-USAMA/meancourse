import { Component,OnDestroy,OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:  ['./post-list.component.css'],

})
export class PostListComponent implements OnInit,OnDestroy{
  // posts = [
  //   {title : 'First Post', content : 'This is the first posts content'},
  //   {title : 'Second Post', content : 'This is the first posts content'},
  //   {title : 'Third Post', content : 'This is the first posts content'},

  // ];

   posts : Post[] = [];
   private postsSub: Subscription;
  // postsService: PostsService;

  constructor(public postsService: PostService){}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });
  }
  // constructor(postsService: PostsService){
  //   this.postsService = postService;
  // }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
