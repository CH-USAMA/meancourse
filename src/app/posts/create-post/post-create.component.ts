import { Component,Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  newpost = '';
  enteredContent ='';
  enteredTitle = '';
  enteredValue = '';
  // @Output() postCreated = new EventEmitter();

  constructor(public postsService: PostService){}

  onAddPost(form : NgForm) {
    if (form.invalid){
      return;
    }
    // this.newpost = this.enteredValue;
    // const post = {
    //   title : form.value.title,
    //   content : form.value.content
    //   // title: this.enteredTitle,
    //   // content: this.enteredContent
    // }
    // alert('Post Added');
  // this.postCreated.emit(post);
  this.postsService.addPost(form.value.title, form.value.content  )
  form.resetForm();

  }
}
