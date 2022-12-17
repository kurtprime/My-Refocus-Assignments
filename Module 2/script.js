function submitHandler() {
    let name = document.querySelector('.name-input').value

    document.querySelector(".header").textContent = `Hello ${name} 👋`
}


let submitButton = document.getElementById("submit").onclick = submitHandler

