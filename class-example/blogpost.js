import { Publication } from "./publication.js";

export class BlogPost extends Publication {
  constructor(title, author, pubDate, url) {
    super(title, author, pubDate);
    this.url = url;
  }

  print() {
    this.printDetails();
    console.log(this.url);
  }
}
