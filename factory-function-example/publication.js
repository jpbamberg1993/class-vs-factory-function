function printDetails(title, author, pubDate) {
  console.log(`
    Title: ${title}
    By: ${author}
    ${pubDate}
  `);
}

export function create(title, author, pubDate) {
  var publicApi = {
    print() {
      printDetails(title, author, pubDate)
    }
  };

  return publicApi;
}
