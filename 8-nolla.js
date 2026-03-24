let result = document.getElementById("result");

document.getElementById("loginButton").addEventListener("click", () => { checkLogin() });

function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let age = Number(document.getElementById("age").value);

    let users = { 
        admin: "nimda123",
        guest: "asd123"
    };

    // admin login
    if (username === "admin" && password === "nimda123") {
        result.textContent = "Welcome admin!";
        return;
    }

    // tarkistaa tyhjät kentät
        if (!username || !password || !age) {
        result.textContent = "Fill all fields!";
        return;
    }


    //login check
    if (users[username] !== password) {
        result.textContent = "Wrong username or password";
        return;
    }

    //age check
    if (age < 18) {
        result.textContent = "You need to be atleast 18 years old.";
        return;
    }

    //kaikki ehdot täyttyy 
    result.textContent = "Welcome to 8-nolla " + username + " !";
}
