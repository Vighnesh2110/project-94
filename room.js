var firebaseConfig = {
      apiKey: "AIzaSyDCchAbcjJMR5waQDsPuvkL1hbXF5lPMwc",
      authDomain: "kwitter-ee3a8.firebaseapp.com",
      databaseURL: "https://kwitter-ee3a8-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee3a8",
      storageBucket: "kwitter-ee3a8.appspot.com",
      messagingSenderId: "1087727871855",
      appId: "1:1087727871855:web:fe6c41e9d4a2bdf9daea9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData()

function logout() 
{
      window.location = "index.html";
}