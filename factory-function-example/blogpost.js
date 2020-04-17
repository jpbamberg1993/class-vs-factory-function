import { create as createPub } from "./publication.js";

function printDetails(pub, url) {
  pub.print();
  console.log(url);
}

export function create(title, author, pubDate, url) {
  var pub = createPub(title, author, pubDate);

  var publicApi = {
    print() {
      printDetails(pub, url);
    }
  };

  return publicApi;
}
