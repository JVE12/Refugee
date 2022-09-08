const firebaseConfig = {
    apiKey: "AIzaSyCkFHAvmr5f_g2x8JH9NT4WRV6pe3V0fAk",
    authDomain: "refugee-cbca8.firebaseapp.com",
    databaseURL: "https://refugee-cbca8-default-rtdb.firebaseio.com",
    projectId: "refugee-cbca8",
    storageBucket: "refugee-cbca8.appspot.com",
    messagingSenderId: "689616463245",
    appId: "1:689616463245:web:90bf3391fe3a94d11a49c4"
  };

  firebase.initializeApp(firebaseConfig);
firebase.database().ref("info/DivText").on('value', function(snapshot) {
    var data = snapshot.val();
    console.log(data);
    document.getElementById("output").innerHTML = data;
})