import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";

export const useGetAllProducts = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionItems = collection(db, 'products')
        getDocs(collectionItems)
        .then((snapshot) => {
            setItems(
                snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            )))
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    return {loading, items}
}