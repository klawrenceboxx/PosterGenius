import React from "react";
import "./PosterInfo.css";
import dog from "../../DesignAssets/images_posters/dog.png";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";
import {useParams} from "react-router-dom";
import {getDoc, doc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";
import {useState, useEffect, useMemo} from "react";

// import { Link } from "react-router-dom";

function PosterInfo() {
  const {id} = useParams();
  const [data, setData] = useState(null); // Initialize a state variable to store the document data

  // get a single document
  const docRef = useMemo(() => doc(db, "Posters", id), [id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        console.log("Current data: ", doc.data());
        setData(doc.data()); // Set the document data to state
      } else {
        console.log("No such document!");
      }
    });

    // Clean up function to unsubscribe from the snapshot on component unmount
    return () => unsubscribe();
  }, [docRef]);

  if (!data) {
    // Show loading state while the data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="product__detail__container">
        <div className="images">
          <div className="small__images__container">
            <img src={data.url} alt="" className="small__image" />
            <img src={data.url} alt="" className="small__image" />
            <img src={data.url} alt="" className="small__image" />
            <img src={data.url} alt="" className="small__image" />
          </div>
          <div className="image__container">
            <img src={data.url} alt="" className="product__detail__image" />
          </div>
        </div>
        <div className="product__detail__description">
          {/* <h1>{name}</h1> */}
          {/* <p>{details}</p> */}
          {/* <h1>Dog</h1> */}
          <h1>{data.Title}</h1>
          <h3>CAD ${data.Price}</h3>
          <div className="line"></div>
          <p>size (inch)</p>
          <ul>
            <li>18.0" x 24.0"</li>
            <li>High-quality paper, vibrant colors</li>
            <li>printed with shiny, holographic foil</li>
            <li>frame not included</li>
          </ul>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="product__detail">
        <h2>Product Details</h2>
        <br />
        <p>
          This is the perfect Marvel poster for any Kang the conqueror fans.
          It’s a classic canvas print in a vertical rectangle shape with oil
          paint supports. it’s perfect for any home or office and would make a
          great addition to any Marvel lover’s wall Are you a Marvel fan? if you
          are, this Kang the conqueror poster is right for you! this will bring
          warmth to your walls. we have different sizes that will definitely
          match your style!
        </p>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You might also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {/* {products.map((item) => (
                <Product key={item._id} product={item} />
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterInfo;

// import React, { useState } from 'react';
// import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

// import { client, urlFor } from '../../lib/client';
// import { Product } from '../../components';
// import { useStateContext } from '../../context/StateContext';

// const ProductDetails = ({ product, products }) => {
//   const { image, name, details, price } = product;
//   const [index, setIndex] = useState(0);
//   const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

//   const handleBuyNow = () => {
//     onAdd(product, qty);

//     setShowCart(true);
//   }

//   return (
//     <div>
//       <div className="product-detail-container">
//         <div>
//           <div className="image-container">
//             <img src={urlFor(image && image[index])} className="product-detail-image" />
//           </div>
//           <div className="small-images-container">
//             {image?.map((item, i) => (
//               <img
//                 key={i}
//                 src={urlFor(item)}
//                 className={i === index ? 'small-image selected-image' : 'small-image'}
//                 onMouseEnter={() => setIndex(i)}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="product-detail-desc">
//           <h1>{name}</h1>
//           <div className="reviews">
//             <div>
//               <AiFillStar />
//               <AiFillStar />
//               <AiFillStar />
//               <AiFillStar />
//               <AiOutlineStar />
//             </div>
//             <p>
//               (20)
//             </p>
//           </div>
//           <h4>Details: </h4>
//           <p>{details}</p>
//           <p className="price">${price}</p>
//           <div className="quantity">
//             <h3>Quantity:</h3>
//             <p className="quantity-desc">
//               <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
//               <span className="num">{qty}</span>
//               <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
//             </p>
//           </div>
//           <div className="buttons">
//             <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
//             <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
//           </div>
//         </div>
//       </div>

//       <div className="maylike-products-wrapper">
//           <h2>You may also like</h2>
//           <div className="marquee">
//             <div className="maylike-products-container track">
//               {products.map((item) => (
//                 <Product key={item._id} product={item} />
//               ))}
//             </div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }
//   `;

//   const products = await client.fetch(query);

//   const paths = products.map((product) => ({
//     params: {
//       slug: product.slug.current
//     }
//   }));

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export const getStaticProps = async ({ params: { slug }}) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]'

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return {
//     props: { products, product }
//   }
// }

// export default ProductDetails
