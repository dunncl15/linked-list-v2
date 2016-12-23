
//Event Listeners

//Enter button
$('.enter-btn').on('click', function(e) {
  e.preventDefault();
  addNewBookmark();
})

//Delete button
$('.bookmark-section').on('click', '.delete-btn', function() {
  $(this).parent('.bookmark').remove();
  var bookmarkId = $(this).parent('.bookmark').attr('id');
  removeFromStorage(bookmarkId);
})

//Read button
$('.bookmark-section').on('click', '.read-btn', function() {
  $(this).parent('.bookmark').addClass('read');
})

//Functions
function Bookmark(title, url) {
  this.title = title;
  this.url = url;
  this.id = Date.now();
}

function newBookmark(Bookmark) {
  $('.bookmark-section').append(`<div id="${Bookmark.id}" class="bookmark">
    <p class="website-title" contenteditable>${Bookmark.title}</p>
    <a class="website-url" href="http://${Bookmark.url}" target="_blank" contenteditable>${Bookmark.url}</a>
    <button class="read-btn">Read</button>
    <button class="delete-btn">Delete</button>
  </div>`);
}

function addNewBookmark() {
  var websiteTitle = $('.web-title').val();
  var websiteURL = $('.web-url').val();
  var userBookmark = new Bookmark(websiteTitle, websiteURL);
  newBookmark(userBookmark);
  sendToStorage(userBookmark.id, userBookmark);
}

//JSON functions
function sendToStorage(id, object) {
  var stringifiedBookmark = JSON.stringify(object);
  localStorage.setItem(id, stringifiedBookmark);
}

function removeFromStorage(id) {
  JSON.parse(localStorage.removeItem(id));
}
