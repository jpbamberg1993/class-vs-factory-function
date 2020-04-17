export class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }

  printDetails() {
    console.log(`
      Title: ${this.title},
      By: ${this.author},
      ${this.pubDate}
    `)
  }
}
