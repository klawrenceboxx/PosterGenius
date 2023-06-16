import React, {useState, useEffect} from "react";
import {storage, db} from "../../firebase";
import {ref, listAll, getDownloadURL} from "firebase/storage";
// import {db} from "../../firebase";
import Landscape from "../../DesignAssets/images/Landscape.png";
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
import {Link} from "react-router-dom";

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
    <div className="posters">
      <div className="posters__quote">
        <div className="container">
          <div className="container__left">
            <h1>All Posters & Wall Art</h1>
            <p>
              Browse our full collection of posters and art prints, ranging from
              elaborate infographics to breathtaking scenery
            </p>
            <p>
              Take the world with you wherever you go. Give your friend the
              world with out ner world feature poster
            </p>
          </div>
          <div className="container__right ias">
            <img src={Landscape} alt="frosty forest" />
          </div>
        </div>
      </div>

      <div className="poster__gallery">
        {posters.map((posterField) => {
          return (
            <Link to="/posterinfo">
              <Product
                image={posterField.url}
                title={posterField.title}
                price={posterField.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Posters;
