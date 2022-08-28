const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => displayUsers(data.results))
    .catch((error) => console.log(error));
};
const displayUsers = (users) => {
  // console.log(users.results);
  const usersContainer = document.getElementById("users-container");
  for (const user of users) {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <div class="user">
        <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
        <p>${user.name.first} ${user.name.last}</p>
        <p>${user.gender}</p>
        <p>${user.email}</p>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
    usersContainer.appendChild(userDiv);
  }
};

loadUsers();
