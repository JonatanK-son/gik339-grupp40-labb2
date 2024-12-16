fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const usersList = document.createElement("ul");
    document.body.insertAdjacentElement("afterbegin", usersList);
    data.forEach((element) => {
      const user = document.createElement("li");
      element.toString = function () {
        return this.map(
          (item) => `${item.firstName} ${item.lastName} ${item.username}`
        ).join(", ");
      };
      user.innerText = element.toString();
      usersList.insertAdjacentElement("beforeend", user);
    });
  });
