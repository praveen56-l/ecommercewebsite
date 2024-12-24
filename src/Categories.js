import { useState, useEffect, useMemo, useContext } from "react";
import starImage from "./starImage.jpeg"
import './Categories1.css'
import { ApplicationContext } from "./Context";

const Categories = () => {
  const useApplicationContext=useContext(ApplicationContext)
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((a) => a.json())
      .then((data) => {
        setApiResponse(data.products); 
      });
  }, []);

  const categoryData = useMemo(() => {
    return apiResponse.filter((item) =>
      item.category.toLowerCase().includes(useApplicationContext?.categoryType?.toLowerCase())
    );
  }, [apiResponse, useApplicationContext.categoryType]);

  return (
    <>
   
      <h1>Filtered Products</h1>
      <div className="flex">
      {categoryData.map((product) => (
        <div className="head">
          <img src={product.thumbnail} className="v"/>
          <h3 className="v1">{product.title}</h3>
         
          <div className='b4'>
                            {[...Array(Math.floor(product.rating))].map((elementInArray, index) => (
                                <div key={index}>
                                    < img src={starImage}  className='v2'></img >

                                </div>
                            ))}
                            </div>
          <p>${product.price}</p>
          <p>{product.discountPercentage}</p>
         
         
         
        </div>
      ))}
    </div>
    </>
  );
};

export default Categories;

