
let usersData = [
    { id: 1, name: "kaviya", email: "kaviya@example.com" },
    { id: 2, name: "krishthika", email: "krishthika@example.com" },
];

const userForm = document.getElementById("popup");
const userFormBg = document.getElementById("popupbg");
const addUserBtn = document.getElementById("add-user-btn");
const userNameInput = document.getElementById("user-name");
const userEmailInput = document.getElementById("user-email");
const submitBtn = document.getElementById("submit-button");

addUserBtn.addEventListener("click", () => {
    openUserForm();
    userNameInput.value = "";
    userEmailInput.value = "";
});

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = userNameInput.value;
    const email = userEmailInput.value;

    if (submitBtn.innerText === "Add/Update User") {
        addUser(name, email);
    } else {
        updateUser(submitBtn.dataset.userId, name, email);
    }

    closeUserForm();
});

function displayUserList() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    usersData.forEach((user) => {
        const userItem = document.createElement("div");
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="editUser(${user.id})">Edit</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userList.appendChild(userItem);
    });
}

function addUser(name, email) {
    const id = usersData.length + 1;
    const user = { id, name, email };
    usersData.push(user);
    displayUserList();
}

function editUser(id) {
    const user = usersData.find((u) => u.id === id);
    if (user) {
        userNameInput.value = user.name;
        userEmailInput.value = user.email;
        submitBtn.innerText = "Update User";
        submitBtn.dataset.userId = user.id;
        openUserForm();
    }
}

function updateUser(id, name, email) {
    const userIndex = usersData.findIndex((u) => u.id == id);
    if (userIndex !== -1) {
        usersData[userIndex].name = name;
        usersData[userIndex].email = email;
        displayUserList();
        resetUserForm();
    }
}

function deleteUser(id) {
    const userIndex = usersData.findIndex((u) => u.id === id);
    if (userIndex !== -1) {
        usersData.splice(userIndex, 1);
        displayUserList();
    }
}

function openUserForm() {
    userForm.style.display = "block";
    userFormBg.style.display = "block";
}

function closeUserForm() {
    resetUserForm();
    userForm.style.display = "none";
    userFormBg.style.display = "none";
}

function resetUserForm() {
    userNameInput.value = "";
    userEmailInput.value = "";
    submitBtn.innerText = "Add/Update User";
    submitBtn.dataset.userId = "";
}

displayUserList();
