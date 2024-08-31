import React, { useState } from "react";
 





const AddProduct = () =>{

    const [data,setData] = useState({
        name:'',
        price:'',
        image:''
    })

    function changeHandler(event){
        const { name, value, files } = event.target;
        setData({
            ...data,
            [name]: files ? files[0] : value // handle file input separately

        })
    }
    function submit(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("image", data.image);
        fetch("http://135.181.37.152:3020/products",{
            method:"POST",
            body:formData
        }).then(e=>{
            return e.text();
        }).then(e=>{
            console.log("successfuly posted to db:",e);
        }).catch(e=>{
            console.log(e);
        })

    }

    return (
        <>
            <h1>Add Product</h1>

            <form className="form-inline width-400" onSubmit={submit}  enctype="multipart/form-data">
                <div className="form-group">
                <label className="sr-only" >Enter Product Name:</label>
                <input 
                type="text" 
                className="form-control" 
                required 
                name="name"
                value={data.name}
                onChange={changeHandler}
                />
                </div>
                <div className="form-group">
                <label className="sr-only" >Enter Product price:</label>
                <input 
                type="text" 
                className="form-control" 
                required 
                name="price"
                value={data.price}
                onChange={changeHandler}
                />
                
                </div>
                <div className="form-group">
                    <label>Upload image</label>
                    <input  
                    type="file" 
                    className="form-control" 
                    name="image" 
                    required
                    onChange={changeHandler}
                    />
                </div>
            
                <button type="submit" className="btn btn-default submit">Submit</button>
            </form>
        </>
    )
}
export default AddProduct;