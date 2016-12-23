function Bookmark(title, url) {
  this.title = title;
  this.url = url;
  this.id = Date.now();
}

function getUserInput() {
  var websiteTitle = $('.web-title').val();
  var websiteURL = $('.web-url').val();
  var bookmark = new Bookmark(websiteTitle, websiteURL)
  addBookmark(bookmark);
}
