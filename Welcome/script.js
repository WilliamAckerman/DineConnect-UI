class Customer {
  constructor(firstName, lastName, email, mobile, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
  }
}

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const mobile = document.getElementById("mob_num");
const password = document.getElementById("password");
const customerArray = [];
getCutomerData();

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", () => {
  let tempFname = firstName.value;
  let tempLname = lastName.value;
  let tempEmail = email.value;
  let tempMobile = mobile.value;
  let tempPassword = password.value;
  customerArray.push(
    new Customer(tempFname, tempLname, tempEmail, tempMobile, tempPassword)
  );
  saveCustomers();
});

function saveCustomers() {
  localStorage.setItem("customerData", JSON.stringify(customerArray));
}

function getCutomerData() {
  if (
    localStorage.getItem("customerData") === null ||
    localStorage.getItem("customerData") === "[]"
  ) {
    console.log("Storage is empty");
  } else {
    customerArray.push(...JSON.parse(localStorage.getItem("customerData")));
  }
}
