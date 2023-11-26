import axios from "axios";

export async function loginApi(postData) {
  try {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      postData
    );
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}


export async function signUpApi(postData) {
  try {
    const response = await axios.post(
      "https://dummyjson.com/users/add",
      postData
    );
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateUserApi(postData, id) {
  try {
    const response = await axios.put(
      `https://dummyjson.com/products/${id}`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}