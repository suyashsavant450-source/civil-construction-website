import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const trackVisitor = async () => {
  try {
    console.log("Visitor tracking started");

    const alreadyTracked = sessionStorage.getItem("visitorTracked");

    if (alreadyTracked) {
      console.log("Already tracked in this session");
      return;
    }

    const docRef = await addDoc(collection(db, "visitors"), {
      visitedAt: new Date().toISOString(),
    });

    sessionStorage.setItem("visitorTracked", "true");

    console.log("Visitor added:", docRef.id);
  } catch (error) {
    console.error("Visitor tracking failed:", error);
  }
};

export default trackVisitor;