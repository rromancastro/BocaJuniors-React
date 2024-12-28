import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";

export const useGetProductsByCategory = (category) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionItems = collection(db, 'products')
        getDocs(collectionItems)
        .then((snapshot) => {

            const arrayItems = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))
            setItems(arrayItems.filter((item) => item.category == category))
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [category]);

    return {loading, items}
}