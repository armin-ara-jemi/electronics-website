import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Cards=({title,price,image,category,id})=>{
  return(
    <div className='col-lg-3'>
    <div className="card" style={{width: '18rem'}}>
  <Image src={image} alt='image' width={100} height={100}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{price}</p>
    <span>{category}</span>
    <br/>
    <br/>
    <Link href={`/blog/${id}`} className="btn btn-outline-secondary">Go to Details</Link>
  </div>
</div>

</div>
  )
}
const GetData=async()=>{
  const res=await fetch("https://dummyjson.com/products");
  return res.json()
}
const Blog = async() => {
  const data=await GetData();
  const products=data.products 
  console.log(data.products)
  return (
    <div className='container'>
      <div className='row'>
        {
        products.map(product=><Cards title={product.title} price={product.price} image={product.thumbnail} category={product.category} id={product.id}/>)
        }
      </div>
    </div>
  )
}

export default Blog