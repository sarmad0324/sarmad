
alert("Welcome to the website")

let age = prompt("Enter age here :")
age = Number.parseInt(age)

if (age>18) {
    alert("You can change the background color")
    let color = prompt("Enter the backgroung color of your choice ? ")
    document.body.style.background = color
}

else if (age < 0) {
    console.error("Enter a valid age")
    location.href = "https://www.google.com"
}

else {
    alert("You cannot change the background color")
}