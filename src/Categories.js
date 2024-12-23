// import { useState, useEffect, useMemo } from "react";
// const Categories = () => {
//     const [apiResponse, setApiResponse] = useState([])
//   const [filterData, setFilterData] = useState("beauty")


//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//     .then(a=>a.json())
//     .then(arr=>
//       setApiResponse(arr)
//     )
// }),[]


//   const catogeryData = useMemo(()=>{

//   },[apiResponse, filterData])

//   console.log("apiResponse",apiResponse)
  
  
//   return <></>;
// };
// export default Categories;
import { useState, useEffect, useMemo } from "react";
import starImage from "./starImage.jpeg"

const Categories = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [filterData, setFilterData] = useState("beauty");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((a) => a.json())
      .then((data) => {
        setApiResponse(data.products); 
      });
  }, []);

  const categoryData = useMemo(() => {
    return apiResponse.filter((item) =>
      item.category.toLowerCase().includes(filterData.toLowerCase())
    );
  }, [apiResponse, filterData]);

  console.log("Filtered Data:", categoryData);

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

