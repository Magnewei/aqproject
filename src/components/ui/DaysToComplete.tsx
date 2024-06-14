import axios from 'axios';
import Link from 'next/link';

function fetchData() {
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

  return new Promise((resolve, reject) => {
    fetch(data)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error fetching data');
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

/*
 function DaysToComplete({ items }) {
  return (
    <div>
      <p>aids</p>
    </div>
  );
}

*/

const generateCost = () => {
  // pls vercel
  return 'aids';
};

export default function DaysToComplete() {
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

  return <p>{data}</p>;
}
