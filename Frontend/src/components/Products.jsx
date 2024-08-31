import React, { useEffect, useState } from "react";



const Products = () =>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:3020/products")
        .then(e=>e.json())
        .then(resp=>setData(resp))
    },[]) 

    return(
        <>
            <h1>Products</h1>
            <div className="d-flex justify-content-around align-items-start flex-wrap">

                {
                    
                    data.map(element=>{
                        return (
                            <div key={element._id} className="card mycard">
                                <img src={element.image} className="card-img-top" alt="nkar" />
                                <div  className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <h5 className="card-title">Price - ${element.price}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Products;