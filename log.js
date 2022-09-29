doop = ""
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
function login()
{
    name = document.getElementById("name").value;
    console.log("hello");

    firebase.database().ref("user/" + name).on('value', function(snapshot) {
        var data = snapshot.val();
        //alert("Welcome " + data.Name)
        if(data == null){
            alert("Username not found");
        }
        else{
            alert("Welcome " + data.Name)
            
        }
    })
  document.getElementById("login").style.visibility = "hidden";
  //  function getData() {  firebase.database().ref("/info").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     //  info = childKey;
     //  console.log("info - " + info);
    // row = "<div class='info' id="+info+">"+ info +"</div><hr>";
    // document.getElementById("output").innerHTML += row;
    //});
   // });

   // }
  //  getData();
  window.localStorage.removeItem("firebase:host:refugee-cbca8-default-rtdb.firebaseio.com");
  window.localStorage.removeItem("firebase:host:refugee-cbca8-default-rtdb.firebaseio.com");
  window.localStorage.removeItem("length");
  localStorage.setItem("<br>", "<br>");
  local = localStorage;
for (var key in local) {
    let oo = key
    let i = oo.startsWith("<div>");
    let ok = oo.startsWith("firebase");
    let contain = oo.includes("<div>")
    //console.log(local[key])
    console.log(key + i);
    //console.log(i);]
    if (i = "true"){
    if (contain = "true"){
        if (ok = "false"){
        doop += key
        }
  //console.log(key);
    }
//Do something with key, access value by local[key]
}
document.getElementById("output").innerHTML = doop;
}
}
