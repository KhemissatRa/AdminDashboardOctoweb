import axios from "axios";
import { createContext, useState } from "react";
import { Await } from "react-router-dom";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [Image, setImage] = useState(null);   // <-- file
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [Category, setCategory] = useState("");

  const token = localStorage.getItem("token");

const handleCreateProduct = async () => {
  try {
    if (!token) {
      alert("❌ Please log in first");
      return;
    }

    if (!Image) {
      alert("❌ Please select an image");
      return;
    }

const formData = new FormData();
formData.append("Image", Image);             // file object
formData.append("title", title.trim());      // non-empty string
formData.append("description", description.trim());
formData.append("price", Number(price));     // convert string to number
formData.append("Category", Category.trim());

    // 🔹 Use await here
    const response = await axios.post(
      "https://backendoctoweb.onrender.com/product/",
      formData,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );

    // ✅ Response handling
    console.log("Product created:", response.data);
    alert("✅ Product created successfully!");

    // Reset form
    setImage(null);
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");

  } catch (err) {
    console.error("Error creating product:", err);
    alert("❌ Failed to create product. See console for details.");
  }
};

  return (
    <ProductContext.Provider
      value={{
        Image,
        setImage,
        title,
        setTitle,
        description,
        setDescription,
        price,
        setPrice,
        Category,
        setCategory,
        handleCreateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
