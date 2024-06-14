import axios from 'axios';

// Using "Alina" as name query
const name = 'pcmand';
const url = `https://multus-aqw-api.vercel.app/api/aqw/items/equipped?name=${name}`;
const data = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

console.log(data);
