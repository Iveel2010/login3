const Email = document.getElementsByClassName("Email")[0];
const Password = document.getElementsByClassName("Password")[0];
const Phonenumber = document.getElementsByClassName("Phonenumber")[0];
const button = document.getElementsByClassName("button")[0];

function email() {
  const aemail = Email.value;
  if (aemail.includes("@")) {
    alert("ok");
  } else {
    alert("@ bagui bn");
  }
}
let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let alhabet = "abcdefghijklmnopqrstuvwxyz";
function isNumber() {
  const number1 = Phonenumber.value;
  if (number1.length <= 8) {
    alert("numberiin urt 8 bolon tuunees deesh urtai baih shaardlagtai");
  }
  for (let i = 0; i < number1.length; i++) {
    if (number1.includes(alhabet[i])) {
      alert("number dotor useg bichej bolohgui tul ta zasnuu");
      break;
    }
  }
}
function isPassword() {
  const password1 = Password.value;
  let count2 = 0;
  if (password1.length <= 8) {
    alert("passwordiin urt 8 bolon tuunees deesh urtai baih shaardlagtai");
  }
  for (let i = 0; i < Password.value.length; i++) {
    if (password1.includes(alhabet[i])) {
      break;
    } else {
      alert("password dotor useg bichesen baih saardlagatai tul ta zasnuu");
      break;
    }
  }
  for (let i = 0; i < Password.value.length; i++) {
    if (password1.includes(num[i])) {
      break;
    } else {
      alert("password dotor too bichesen baih saardlagatai tul ta zasnuu");
      break;
    }
  }
}
function myFunction() {
  if (Password.type === "password") {
    Password.type = "text";
  } else {
    Password.type = "password";
  }
}

button.addEventListener("click", function () {
  email();
  isNumber();
  isPassword();
});
