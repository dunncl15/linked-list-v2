$(document).ready(function() {
  for(var i = 0; i < localStorage.length; i++) {
    var storedBookmark =  JSON.parse(localStorage.getItem(localStorage.key(i)));
    newBookmark(storedBookmark);
  }
})

//Event Listeners

//Input fields

$('input[type="text"]').on('keyup', function() {
  checkForm();
})

//Enter button
$('.enter-btn').on('click', function(e) {
  e.preventDefault();
  addNewBookmark();
  clearInputs();
})

//Delete button
$('.bookmark-section').on('click', '.delete-btn', function() {
  $(this).parent('.bookmark').remove();
  var bookmarkId = $(this).parent('.bookmark').attr('id');
  removeFromStorage(bookmarkId);
})

//Read button
$('.bookmark-section').on('click', '.read-btn', function() {
  $(this).parent('.bookmark').toggleClass('read');

  var id = $(this).parent('.bookmark').attr('id');
  retrievedObject = JSON.parse(localStorage.getItem(id));
  var currentStatus = $(this).parent('.bookmark').attr('class');
  retrievedObject.status = currentStatus;
  sendToStorage(id, retrievedObject);
})

//Functions

function Bookmark(title, url) {
  this.title = title;
  this.url = url;
  this.status = 'bookmark';
  this.id = Date.now();
}

function newBookmark(Bookmark) {
  $('.bookmark-section').append(`<div id="${Bookmark.id}" class="${Bookmark.status}">
    <p class="website-title">${Bookmark.title}</p>
    <a class="website-url" href="http://${Bookmark.url}" target="_blank">${Bookmark.url}</a>
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

function clearInputs() {
  $('.web-title').val(null);
  $('.web-url').val(null);
  disableBtn();
}

function checkForm() {
  var complete = true;
  $('input[type="text"]').each(function() {
    if ($(this).val() === '') {
      complete = false;
      disableBtn();
    } else {
      enableBtn();
    }
  });
}

function enableBtn() {
  $('.enter-btn').prop('disabled', false);
}

function disableBtn() {
  $('.enter-btn').prop('disabled', true);
}

//JSON functions
function sendToStorage(id, object) {
  var stringifiedBookmark = JSON.stringify(object);
  localStorage.setItem(id, stringifiedBookmark);
}

function removeFromStorage(id) {
  JSON.parse(localStorage.removeItem(id));
}
