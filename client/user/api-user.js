//Fetching data from user CRUD

//Creating a user
const create = async (user) => {
  try {
    let res = await fetch("/api/users/", {
      //fetch user data from the view component
      method: "POST", //post call made at the create API route
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await res.json(); //return promise
  } catch (err) {
    console.log(err);
  }
};

//Listing the Users
const list = async (signal) => {
  try {
    let res = await fetch("/api/users/", {
      method: "GET", //fetch GET call to retreive all the users in the database
      signal: signal,
    });
    return await res.json(); //return response as promise
  } catch (err) {
    console.log(err);
  }
};

//Reading a user profile
const read = async (params, credentials, signal) => {
  try {
    let res = await fetch("/api/users/" + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "Application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + credentials.t,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

//Deleting users profile
const remove = async (params, credentials) => {
  try {
    let res = await fetch("/api/users/" + params.userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer" + credentials.t,
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

//Updating user profile
const update = async (params, credentials, user) => {
  try {
    let res = await fetch("/api/users/" + params.userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Autorization: "Bearer" + credentials.t,
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, remove, list, read, update };
