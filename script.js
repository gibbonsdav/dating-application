const form = document.getElementById("form")
const name = document.getElementById("name")
const address = document.getElementById("address")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const iq = document.getElementById("iq")
const male = document.getElementById("male")
const female = document.getElementById("female")
const other = document.getElementById("other")
const essay = document.getElementById("essay")

const close = document.getElementById("close")
const open = document.getElementById("open")

// show modal
open.addEventListener("click", () => modal.classList.add("show-modal"))

//close modal
close.addEventListener("click", () => modal.classList.remove("show-modal"))

//hide modal by clicking outside
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
)

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = "form-control error"
  const small = formControl.querySelector("small")
  small.innerText = message
  console.log(formControl.className)
  if (formControl.className) {
    modal.classList.remove("show-modal")
  }
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = "form-control success"
}

// Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault()
  if (name.value === "") {
    showError(name, "Name is required")
  } else {
    showSuccess(name)
  }
  if (address.value === "") {
    showError(address, "Address is required")
  } else {
    showSuccess(address)
  }
  if (email.value === "") {
    showError(email, "Email is required")
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please enter a valid email address")
  } else {
    showSuccess(email)
  }
  if (phone.value === "") {
    showError(phone, "Phone is required")
  } else {
    showSuccess(phone)
  }
  if (iq.value === "") {
    showError(iq, "IQ is required")
  } else {
    showSuccess(iq)
  }
  if (date.value === "") {
    showError(date, "Date is required")
  } else {
    showSuccess(date)
  }
  if (essay.value.length < 49) {
    showError(essay, "Essay must have 50 or more characters")
  } else {
    showSuccess(essay)
  }
  console.log(essay.value.length)
})
