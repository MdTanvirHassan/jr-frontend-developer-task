const BASE_URL = 'https://reqres.in/api';

export const signIn = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (response.ok) {
    return { data };
  } else {
    throw new Error(data.error);
  }
};

export const signUp = async (email, password) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (response.ok) {
    return { data };
  } else {
    throw new Error(data.error);
  }
};

export const fetchUsersList = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/users?page=${page}`);
  const data = await response.json();
  if (response.ok) {
    return { data };
  } else {
    throw new Error(data.error);
  }
};

export const fetchUserProfile = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  const data = await response.json();
  if (response.ok) {
    return { data };
  } else {
    throw new Error(data.error);
  }
};
