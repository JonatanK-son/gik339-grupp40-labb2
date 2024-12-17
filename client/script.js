fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    const usersList = document.createElement("ul");
    document.body.insertAdjacentElement("afterbegin", usersList);
    users.forEach((element) => {
      const user = document.createElement("li");
      user.innerText = formatUser(element);
      user.style.backgroundColor = element.color;
      usersList.insertAdjacentElement("beforeend", user);
    });
  });

function formatUser(item) {
  return `${item.firstName} ${item.lastName} 
          ${item.username}`;
}
