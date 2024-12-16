fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const usersList = document.createElement("ul");
    document.body.insertAdjacentElement("afterbegin", usersList);
    data.forEach((element) => {
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
