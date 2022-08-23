import React from 'react'

const ProductsList = ({productDetails}) => {
  return (
    <div>
        {productDetails.map((product)  => {
                    return(
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',padding: '3px 20px',boxShadow: '2px 5px 10px black'}}>
                    <p>{product.productTitle}</p>
                    <img style={{width: '100px', height: '90px', margin: '10px', backgroundColor:'transparent'}} src={product.productImg} alt="" />
                </div>
                    )
                })}
    </div>
  )
}

export default ProductsList