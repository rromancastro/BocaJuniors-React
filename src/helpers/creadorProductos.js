import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config"; // Asegúrate de importar tu configuración

/**
 * Función para agregar un documento a Firestore
 * @param {string} collectionName - Nombre de la colección
 * @param {Object} data - Datos a agregar al documento
 * @returns {Promise<string>} - ID del documento agregado
 */
const addDocumentToFirestore = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Documento agregado con ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar el documento: ", error);
    throw error;
  }
};


export default addDocumentToFirestore;
