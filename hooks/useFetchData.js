import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLaoding] = useState(true);

  const getData = async () => {
    try {
      setLaoding(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLaoding(false);
    } catch (error) {
      console.log(error);
      setLaoding(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [data, loading];
};

export default useFetchData;
