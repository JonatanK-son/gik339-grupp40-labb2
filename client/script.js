fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const usersList = document.createElement("ul");
    document.body.appendChild(usersList);
    data.forEach((element) => {
      var user = document.createElement("li");
      usersList.insertAdjacentElement("beforeend", user);
    });
  });
