import React, { useState, useEffect } from "react";

const DataFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Data not fetch");
          }
          return res.json();
        })

        .then((data) => {
          setdata(data);
          setIsLoding(false);
          setErrors(null);
        })
        .catch((error) => {
          setErrors(error.message);
          setIsLoding(false);
        });
    }, 2000);
  }, []);

  return { data, isLoding, errors };
};

export default DataFetch;
