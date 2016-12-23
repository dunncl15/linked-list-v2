
//Event Listeners
$('.enter-btn').on('click', function(e) {
  e.preventDefault();
  getUserInput();
})

function Bookmark(title, url) {
  this.title = title;
  this.url = url;
  this.id = Date.now();
}

function addBookmark(Bookmark) {
  $('.bookmark-section').append(`<div id="${Bookmark.id}" class="bookmark">
    <p class="website-title" contenteditable>${Bookmark.title}</p>
    <a class="website-url" href="http://${Bookmark.url}" target="_blank" contenteditable>${Bookmark.url}</a>
    <button class="read-btn">Read</button>
    <button class="delete-btn">Delete</button>
  </div>`);
}

function getUserInput() {
  var websiteTitle = $('.web-title').val();
  var websiteURL = $('.web-url').val();
  var userBookmark = new Bookmark(websiteTitle, websiteURL);
  addBookmark(userBookmark);
}
