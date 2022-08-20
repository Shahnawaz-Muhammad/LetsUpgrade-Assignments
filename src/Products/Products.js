import React from 'react'

const Products = () => {
    const productData = [
        {
            productTitle: 'ALIENWARE RGB MECHANICAL GAMING KEYBOARD - AW410K',
            productImg: 'https://i.dell.com/is/image/DellContent//content/dam/images/products/electronics-and-accessories/dell/keyboards/aw410k/aw410k-ckb-rf-gy.psd?fmt=pjpg&pscan=auto&scl=1&wid=3422&hei=2468&qlt=100,0&resMode=sharp2&size=3422,2468'
        },
        {
            productTitle: 'Dell Pro Wireless Keyboard and Mouse – KM5221W',
            productImg: 'https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/keyboards/km5221w/windows11/km5221w-xkb-07-bk.psd?qlt=95&fit=constrain,1&hei=260&wid=461&fmt=jpg'
        },
        {
            productTitle: 'Dell Premier Multi-Device Wireless Keyboard and Mouse – KM7321W',
            productImg: 'https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/keyboards/km7321w/windows-11/km7321w-xkb-02-gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=1072&qlt=100,0&resMode=sharp2&size=1072,402'
        },
        {
            productTitle: 'Dell Multi-Device Wireless Keyboard and Mouse Combo - KM7120W',
            productImg: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/km7120w/global-spi/ng/dell-km7120w-wireless-keyboard-and-mouse-details-hero-500-ng.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402'
        },
        {
            productTitle: 'ALIENWARE WIRED/WIRELESS GAMING MOUSE - AW610M - LUNAR LIGHT',
            productImg: 'https://i.dell.com/is/image/DellContent//content/dam/images/products/electronics-and-accessories/dell/pointing-devices/aw610m/aw610m-ckb-4050lb-wh.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=588&qlt=100,0&resMode=sharp2&size=588,402'
        },
        {
            productTitle: 'Alienware Low Profile RGB Mechanical Gaming Keyboard - AW510K - Lunar Light',
            productImg: 'https://snpi.dell.com/snp/images/products/large/en-us~580-AIMO_V1/580-AIMO_V1.jpg'
        },
        {
            productTitle: 'Logitech G903 HERO LIGHTSPEED Wireless Gaming Mouse - Black',
            productImg: 'https://snpi.dell.com/snp/images/products/large/en-us~AA698024/AA698024.jpg'
        },
        {
            productTitle: 'SteelSeries Apex Pro USB Keyboard - OmniPoint Adjustable Key Switch',
            productImg: 'https://snpi.dell.com/snp/images/products/large/en-us~AA760821/AA760821.jpg'
        },
        {
            productTitle: 'Logitech G915 TKL LIGHTSPEED Wireless Mechanical Gaming Keyboard - Linear',
            productImg: 'https://snpi.dell.com/snp/images/products/large/en-us~AB185852_v1/AB185852_v1.jpg'
        },
        {
            productTitle: 'SteelSeries Aerox 3 2022 Edition Right-Handed Bluetooth USB Wireless Mouse - Snow',
            productImg: 'https://snpi.dell.com/snp/images/products/large/en-us~AB972426/AB972426.jpg'
        },

    ]
  return (
    <div>
        <div>
            <div style={{border: '1px solid black', padding: '20px' , marginTop: '20px'}}>
            <h1>Products</h1>
                {productData.map((product)  => {
                    return(
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',padding: '3px 20px',boxShadow: '2px 5px 10px black'}}>
                    <p>{product.productTitle}</p>
                    <img style={{width: '100px', height: '90px', margin: '10px', backgroundColor:'transparent'}} src={product.productImg} alt="" />
                </div>
                    )
                })}
                {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around',padding: '3px',boxShadow: '5px 5px 10px black'}}>
                    <h2>Shirts</h2>
                    <img style={{width: '100px', height: '90px', margin: '10px' ,marginBottom: '5px', backgroundColor:'transparent'}} src='http://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/input_devices/dell/keyboards/alienware-aw768/pdp/alienware-pro-gaming-keyboard-pdp-module-02-v2.jpg?fmt=png-alpha' alt="" />
                </div> */}
                
            </div>
        </div>
    </div>
  )
}

export default Products