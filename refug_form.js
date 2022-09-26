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
function signup()
{
    
fam_size = document.getElementById("Fam-size").value;
name = document.getElementById("name").value;
c_y = document.getElementById("c/y").value;
gender = document.getElementById("gender").value;
pets = document.getElementById("pets").value;
name333 = document.getElementById("name").value;
nationality = document.getElementById("nationality").value;
email = document.getElementById("email").value;
thing ="<div> Name:" + name + ", Family Size:" + fam_size + ", Gender:" + gender + ", Pets:" + pets + ", Nationality:" + nationality

  
  firebase.database().ref("user/" + name).set({
    Family_size : fam_size,
    City : c_y,
    Name : name,
    gender : gender,
    pets : pets,
    type : "Refugee"
  })
  //window.location = "Login.html";
 // firebase.database().ref("info/DivText").on('value', function(snapshot) {
   // var data = snapshot.val();
    //console.log(data);
    //firebase.database().ref("info").set({
    
      //DivText:data + "<div>Name:" + name + ", Family Size:" + fam_size + ", Gender:" + gender + ", Pets:" + pets + "</div> <br><br>"
  //});
//})
 // firebase.database().ref("info").set({
    
  //  NameInfo : "<div>Name:" + name + ", Family Size:" + fam_size + ", Gender:" + gender + ", Pets:" + pets + "</div> <br><br>"
//});
  // window.location = "Login.html";
  //firebase.database().ref("info").set({
    
  //});
  firebase.database().ref("info").child(thing).update({
    purpose : "adding room name"
   });
   localStorage.setItem(thing, thing)
   window.location = "Login.html";
}
