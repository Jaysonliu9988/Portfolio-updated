var firebaseConfig = {
    apiKey: "AIzaSyB9QPrIDCi5A9mKdeAyR3FrAkueek15D3I",
    authDomain: "portfolio-message.firebaseapp.com",
    databaseURL: "https://portfolio-message.firebaseio.com",
    projectId: "portfolio-message",
    storageBucket: "portfolio-message.appspot.com",
    messagingSenderId: "406174486219",
    appId: "1:406174486219:web:e0bf3174852538a1e9954e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var database = firebase.database();

var youEmail = "";
var youMessage = "";

// 2. Button for adding train
$("#send-message").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  youEmail = $("#email-input").val().trim();
  youMessage = $("#message-input").val().trim();
  

//   // Creates local "temporary" object for holding schedule data
//   var newMessage = {
//     email: youEmail,
//     message: youMessage,
   
//   };

//   // Uploads schedule data to the database
//   database.ref().push(newMessage);

  database.ref().push({
    email: youEmail,
    message: youMessage,
  });

  // Logs everything to console
  console.log(youEmail);
  console.log(youMessage);
 
//   alert("Message successfully added");

  // Clears all of the text-boxes

  $("#email-input").val("");
  $("#message-input").val("");
 
});