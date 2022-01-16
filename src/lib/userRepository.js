const FIREBASE_DOMAIN = 'https://react-http-helper-default-rtdb.firebaseio.com';

export async function getAllUsers() {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch users.");
  }

  const transformedUsers = [];

  for (const key in data) {
    const userObj = {
      id: key,
      ...data[key],
    };

    transformedUsers.push(userObj);
  }

  return transformedUsers;
}

export async function getSingleUser(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${userId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch user with id:" + userId);
  }

  const loadedUser = {
    id: userId,
    ...data,
  };

  return loadedUser;
}

export async function getUserByEmailPassword(loginInfo) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch users.");
  }
  let user = null;

  for (const key in data) {
    let userData = data[key];
    if (userData.email === loginInfo.email && userData.password === loginInfo.password) {
      user = userData;
    }
  }
  return user;
}

export async function addUser(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`, {
    method: "POST",
    body: JSON.stringify(userData), 
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return userData;
}
