import React, {useState, useEffect} from "react";
import {storage, db} from "./firebase";
import {ref} from "firebase/storage";
// import {db} from "../../firebase";
import mountain2 from "./DesignAssets/images/mountain2.png";
import "./Posters.css";
import "./DesignAssets/fonts/Poppins-Regular.ttf";
import "./DesignAssets/fonts/RobotoFlex-Regular.ttf";
import Product from "./Product";
import {collection, getDocs, query, orderBy} from "firebase/firestore";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

function Posters() {
  const [posters, setPosters] = useState([]);

  // const imageListRef = ref(storage, "images/");

  useEffect(() => {
    const fetchData = async () => {
      //creates a reference to the poster collection in firebase
      const posterDoc = collection(db, "posters");
      // New ordered query
      // const orderedQuery = query(posterDoc, orderBy("url"));
      const orderedQuery = query(posterDoc, orderBy("title"));

      //using getDocs to get a snapshot of the poster collection/ get all the documents in the collection
      const snapshot = await getDocs(orderedQuery);

      //map through the snapshot and return the url, title and price of each document
      const posterField = snapshot.docs.map((doc) => {
        //doc.data() returns the data of the document
        const docData = doc.data();
        return {
          id: doc.id,
          url: docData.url,
          title: docData.title,
          price: docData.price,
        };
      });
      setPosters(posterField);
      console.log(posterField);
    };

    fetchData();
  }, []);

  return (
    <div className="posters">
      <section className="posters__quote">
        <div className="container">
          <div className="container__left__position">
            <h1>All Posters & Wall Art Decor</h1>
            <p>
              Don't buy art, buy a statement. show off our aesthetic brilliance,
              and let your space tell your story
            </p>
            <p>Browse our full collection of posters and wall Decor!</p>
          </div>
          <div className="container__right__position">
            <img
              className="mountain__img"
              src={mountain2}
              alt="frosty forest"
              loading="lazy"
            />{" "}
          </div>
        </div>
      </section>

      <section className="poster__gallery">
        <div className="container__gallery">
          {posters.map((posterField) => {
            return (
              <Link to={`/posterinfo/${posterField.id}`} key={posterField.id}>
                <Product
                  id={posterField.id}
                  image={posterField.url}
                  title={posterField.title}
                  price={posterField.price}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Posters;
