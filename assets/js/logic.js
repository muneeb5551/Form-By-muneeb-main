$(document).ready(function(e) {
  var btn = $('#submit-btn').on('click', data)
})

function data(e) {
  var name = document.getElementById("user-name");
  var email = document.getElementById("user-email");
  var number = document.getElementById("user-number");
  var image = document.getElementById("image-browse");
  const [file] = image.files;
  if (file) {
    var html = `<img id="blah" accept="image/*" src="${URL.createObjectURL(
      file
    )}" style="width: 100px;"/>`;
  }

  // Declares RegEx for validation process!
  var letters = /^[A-Z a-z]+$/;
  var numbers = /^[0-9]+$/;

  //  Validation for Name!
  if (name == "" || !name.value.match(letters)) {
    document.getElementById("name-vali").innerHTML =
      "Please type your name! <br> Only ALPHABETS!";
    name.style.border = "2px solid red";
    swal("NO WAY", "PLEASE FIRSTLY FILL THE FORM!", "error");

    return false;
  } else document.getElementById("name-vali").innerHTML = "";
  name.style.border = "2px solid green";

  //   Validation for Email!
  if (
    email.value.charAt(email.value.length - 3) != "." &&
    email.value.charAt(email.value.length - 4) != "."
  ) {
    document.getElementById("email-vali").innerHTML =
      "Please Write Complete Mail Address <br> Example: example@abc.com";
    email.style.border = "2px solid red";
    swal("NO WAY", "PLEASE FIRSTLY FILL THE FORM!", "error");

    return false;
  } else document.getElementById("email-vali").innerHTML = "";
  email.style.border = "2px solid green";

  // Validation for Phone Number!
  if (number.value == "" || !number.value.match(numbers)) {
    document.getElementById("number-vali").innerHTML =
      "Only Numbers Valid Here!";
    number.style.border = "2px solid red";
    swal("NO WAY", "PLEASE FIRSTLY FILL THE FORM!", "error");

    return false;
  } else document.getElementById("number-vali").innerHTML = "";
  number.style.border = "2px solid green";

  //   Validation for Image File!
  if (image.value == "") {
    document.getElementById("image-file").innerHTML = "Please Select a Image!";
    image.style.border = "2px solid red";
    swal("NO WAY!", "PLEASE FIRSTLY FILL THE FORM!", "error");

    return false;
  } else document.getElementById("image-file").innerHTML = "";
  image.style.border = "2px solid green";
  // Access table Element!
  var mytable = document.getElementById("myTable");
  // creating a row!
  var row = mytable.insertRow(1);
  // creating columns!
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  //  append values here!
  cell1.innerHTML = name.value;
  cell2.innerHTML = email.value;
  cell3.innerHTML = number.value;
  cell4.innerHTML = html;
  // Successfull alert
  swal(
    "Good job!",
    "SUCCESSFULLY SUBMITED! OK TO FILL ANOTHER ONE!",
    "success"
  );
  // Clear Form
  name.value = "";
  email.value = "";
  number.value = "";
  image.value = "";
}
