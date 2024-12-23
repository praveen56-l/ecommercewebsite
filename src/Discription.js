import { useEffect, useState } from 'react';
import star_image from "./Icons/star_image.png"
const Discription = () => {
    const [formdata, setformData] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(a => a.json())
            .then(res => {
                setformData(res);
            })
    }, [])

    return (
        <>
            <h3>Inspired by your browsing history</h3>
            <div className='flex'>
                {formdata?.products?.map(item => (
                    <>
                        <div className='b5'>
                            <img src={item.thumbnail} alt='image' className='b2' />
                            <p className='b'>{item.title}</p>
                            <div className='b4'>
                            {[...Array(Math.floor(item.rating))].map((elementInArray, index) => (
                                <div key={index}>
                                    < img src={star_image} alt='*' className='b3'></img >

                                </div>
                            ))}
                            </div>
                            <p>${item.price}</p>
                            <p>free delivery by Amazon</p>
                        </div>
                    </>

                ))}
            </div>
        </>

    )
}

export default Discription;
