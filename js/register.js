

var formEl = document.querySelector(".login-form")
var nameEl = document.querySelector(".name-input")
var loginEl = document.querySelector(".login-input")
var passwordEl = document.querySelector(".password-input")

formEl.addEventListener('submit', async event => {
    event.preventDefault()

    const credentials = {
        email: loginEl.value,
        password: passwordEl.value,
        name: nameEl.value,
        isAdmin: true
    }
    const result = await registerRequest(credentials)
    if (result) {
        const { name, isAdmin, ...loginCreadentials } = credentials
        const result = await loginRequest(loginCreadentials)
        localStorage.setItem('token', result['Authorization'])
        window.location.href = "/admin.html"
    }
})