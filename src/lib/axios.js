import axios from "axios";

let person = {
  name: "Kan",
  description: "kan",
  profilePicURL: "https://s2.coinmarketcap.com/static/img/coins/200x200/24478.png",
};

const createUser = async (obj) => {
  try {
    const response = await axios.post("https://memory-backend-forjsd11.onrender.com/api/users", obj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

createUser(person);
