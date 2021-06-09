import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['test']);

  const handleAdd = (newEl) => {
    if(categories.includes(newEl)){
      return;
    }
    setCategories((prev) => {
      return [newEl, ...prev];
    });
  };

  return (<>
    <h1>GifExpertApp</h1>
    <AddCategory handleSubmit={handleAdd}/>
    <hr />
    {
      categories.map((category )=> <GifGrid key={category} category={category} />)
    }

  </>)
}