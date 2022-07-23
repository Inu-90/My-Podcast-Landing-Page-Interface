
//Selectors
let emailAddress = document.getElementById("email").value;
let reqAccess = document.getElementById("access");
let alert1 = document.querySelector(".alert1");
let alert2 = document.querySelector(".alert2");
let alert_ok = document.querySelector(".ok");
let cancel = document.querySelector(".cancel");
let yes = document.querySelector("yes");

reqAccess.addEventListener("click", function () {
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert1.style.display = "flex";

  } else if (filter.test(email.value))
    alert2.style.display = "flex";
});

alert_ok.addEventListener("click", () => {
    alert1.style.display = "none";
});

cancel.addEventListener("click", () => {
  alert2.style.display = "none";
});

yes.addEventListener("click" , () => {
  alert2.style.display = "none";
})