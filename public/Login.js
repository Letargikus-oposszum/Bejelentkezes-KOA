document.getElementById("loginbtn").addEventListener("click", function () {
    document.getElementById("login").style.display = "block";
    document.getElementById("registration").style.display = "none";
});
document.getElementById("registrationbtn").addEventListener("click", function () {
    document.getElementById("login").style.display = "none";
    document.getElementById("registration").style.display = "block";
});

document.getElementById("loginSubmit").addEventListener("click", function () {
    let email = document.getElementById("emaillog").value;
    let pwd = document.getElementById("pwdlog").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (pwd === "") {
        alert("Password cannot be empty!");
        return;
    }

    alert("Login was successful!")
});

document.getElementById("registrationSubmit").addEventListener("click", async function () {
    let email = document.getElementById("emailreg").value;
    let pwd = document.getElementById("pwdreg").value;
    let pwdAgain = document.getElementById("pwdAgain").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (pwd === "") {
        alert("Password cannot be empty!");
        return;
    }
    else if (pwd !== pwdAgain) {
        alert("The two passwords do not match!")
        return;
    }

    document.getElementById("emailreg").value = '';
    document.getElementById("pwdreg").value = '';
    document.getElementById("pwdAgain").value = '';

    const request = new Request("http://localhost:3000/users/", {
        method: "POST",
        body: JSON.stringify({ email: email, password: pwd}),
      });
      
      const response1 = await fetch(request);
      console.log(response1.status);
      
      //const response2 = await fetch(request);
      //console.log(response2.status);

    alert("Registration was successful!");
});