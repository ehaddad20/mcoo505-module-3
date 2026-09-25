import "./style.css";
import { getUsers } from "./api.js";
import { formatUser, countUsers } from "./utils.js";

const summaryEl = document.querySelector("#summary");
const usersEl = document.querySelector("#users");

async function loadUsers() {
  try {
    const users = await getUsers();

    // map: array of usernames
    const usernames = users.map((user) => user.username);

    // filter: users whose username includes the letter "e"
    const usersWithE = users.filter((user) => user.username.includes("e"));

    // reduce: total character count across all usernames
    const totalChars = usernames.reduce((sum, name) => sum + name.length, 0);

    // spread: copy the array, then extend it with a sample user
    const copiedUsers = [...users];
    const extendedUsers = [
      ...users,
      { id: 999, name: "Sample User", username: "sampleuser", email: "sample@example.com" },
    ];

    summaryEl.innerHTML = `
      <h2>Summary</h2>
      <ul>
        <li>Total users: <strong>${countUsers(users)}</strong></li>
        <li>Users with "e" in username: <strong>${countUsers(usersWithE)}</strong></li>
        <li>Total username characters: <strong>${totalChars}</strong></li>
        <li>Count after spread (with sample user): <strong>${countUsers(extendedUsers)}</strong></li>
      </ul>
    `;

    let cards = "";
    for (const user of users) {
      const { name, email, username } = user;
      cards += `
        <div class="card">
          <h3>${name}</h3>
          <p><strong>Username:</strong> ${username}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p class="formatted">${formatUser(user)}</p>
        </div>
      `;
    }
    usersEl.innerHTML = cards;

    console.log("Usernames:", usernames);
    console.log("Copied users:", copiedUsers);
  } catch (error) {
    usersEl.innerHTML = `<p class="error">Something went wrong loading users: ${error.message}</p>`;
    console.error(error);
  }
}

loadUsers();
