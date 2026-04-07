const btnContainer = document
  .getElementById("logBtn")
  .addEventListener("click", function () {
    const textValue = document.getElementById("inputText");
    let textContainer = textValue.value;
    console.log(textContainer);

    const passwordValue = document.getElementById("inputPassword");
    let passwordContainer = passwordValue.value;
    console.log(passwordContainer);

    if (textContainer == "admin" && passwordContainer == "admin123") {
      alert("login alert successful");
      window.location.assign("/home.html");
    } else {
      alert("login failed");
    }
  });
