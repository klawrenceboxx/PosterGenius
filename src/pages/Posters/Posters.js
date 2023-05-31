import React, {useState, useEffect} from "react";
import {storage, db} from "../../firebase";
import {ref, listAll, getDownloadURL} from "firebase/storage";
// import {db} from "../../firebase";
import frozen from "../../DesignAssets/images/frozen_forest.png";
import "./Posters.css";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";
import "../../DesignAssets/fonts/RobotoFlex-Regular.ttf";
import Product from "../../components/Product/Product";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";

function Posters() {
  const [posters, setPosters] = useState([]);

  const imageListRef = ref(storage, "images/");

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((itemRef) => {
  //       getDownloadURL(itemRef).then((url) => {
  //         setPosters((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      //creates a reference to the poster collection in firebase
      const posterDoc = collection(db, "Posters");
      //using getDocs to get a snapshot of the poster collection/ get all the documents in the collection
      const snapshot = await getDocs(posterDoc);

      //map through the snapshot and return the url, title and price of each document
      const posterField = snapshot.docs.map((doc) => {
        //doc.data() returns the data of the document
        const docData = doc.data();
        return {
          url: docData.url,
          title: docData.Title,
          price: docData.Price,
        };
      });
      setPosters(posterField);
      console.log(posterField);
    };

    fetchData();
  }, []);

  return (
    <div className="posters__page">
      <div className="posters__quote">
        <div className="posters__hero">
          <span className="posters__hero-header">All Posters & Wall Art</span>
          <span className="posters__hero-text">
            Browse our full collection of posters and art prints, ranging from
            elaborate infographics to breathtaking scenery
          </span>
          <p className="posters__hero-texttwo">
            Take the world with you wherever you go. Give your friend the worl+
            with out ner world feature poster
          </p>
        </div>
        <div>
          <img
            className="posters__frosty-forest"
            src={frozen}
            alt="frosty forest"
          />
        </div>
      </div>

      <div className="poster__gallery">
        {posters.map((posterField) => {
          return (
            <Product
              image={posterField.url}
              title={posterField.title}
              price={posterField.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posters;
