import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useGetProductById = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const item = doc(db, "products", id);
    getDoc(item)
      .then((doc) => {
        setProduct({
          id: doc.id,
          ...doc.data(),
        });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading };
};