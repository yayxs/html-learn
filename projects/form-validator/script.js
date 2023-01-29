const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// 展示错误的提示

function showError(input, message) {
  // console.log('输入框dom', input)
  const formControl = input.parentElement
  // console.log('输入框的外层盒子', formControl)
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

function checkRequired(inputArr) {
  let isRequired = false
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
      isRequired = true
    } else {
      showSuccess(input)
    }
  })
  return isRequired
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// 检测长度
function checkLength(input, min, max) {
  const len = input.value.length
  if (len < min) {
    showError(input, `${getFieldName(input)} len min`)
  } else if (len > max) {
    showError(input, `${getFieldName(input)} len max`)
  } else {
    showSuccess(input)
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'passwords do not match')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (checkRequired([username, email, password, password2])) {
    // 检测用户名的长度
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswordsMatch(password, password2)
  }
})
