import React from 'react'
import Image from 'next/image';
const FetchDataWithId=async(id)=>{
const res=await fetch(`https://dummyjson.com/products/${id}`);
return res.json();
}
const BlogPageDetailsWithId =async ({params}) => {
  const {id}=params;
  const data = await FetchDataWithId(id)
  console.log(data);

  return (
    <div class="card text-center">
  <div class="card-header">
    Product Details
    <br/>
    <Image src={data.thumbnail} alt='image' width={250} height={250} />
  </div>
  <div className="card-body ">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">${data.price}</p>
    <p className='card-description'>Description: {data.description}</p>
    <span>{data.category}</span>
  <div class="card-footer text-muted">
  
  </div>
</div>
</div>


    
    
  )
}

export default BlogPageDetailsWithId
