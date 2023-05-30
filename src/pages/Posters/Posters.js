import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {collection, onSnapshot, doc, query} from "firebase/firestore";
import React, {useState, useEffect} from "react";
import {storage} from "../../firebase";
import {ref, listAll, getDownloadURL} from "firebase/storage";
// import {db} from "../../firebase";
import frozen from "../../DesignAssets/images/frozen_forest.png";
import "./Posters.css";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";
import "../../DesignAssets/fonts/RobotoFlex-Regular.ttf";
import Product from "../../components/Product/Product";
// import Gears from "../../DesignAssets/images_posters/london.png";
// import eagle from "../../DesignAssets/images_posters/eagle.png";
// import car from "../../DesignAssets/images_posters/car.png";
// import flours from "../../DesignAssets/images_posters/flours.png";
// import city from "../../DesignAssets/images_posters/city.png";
// import pond from "../../DesignAssets/images_posters/pond.png";
// import bubblegum from "../../DesignAssets/images_posters/bubblegum.png";
// import graffiti from "../../DesignAssets/images_posters/graffiti.png";
// import samurai from "../../DesignAssets/images_posters/samurai.png";
// import sports from "../../DesignAssets/images_posters/sports.png";
// import dog from "../../DesignAssets/images_posters/dog.png";
// import watch from "../../DesignAssets/images_posters/watch.png";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj6p5VFSExYSWIZUllJDfvPUa3CBJfDZ0",
  authDomain: "postergenius-14856.firebaseapp.com",
  projectId: "postergenius-14856",
  storageBucket: "postergenius-14856.appspot.com",
  messagingSenderId: "288158376102",
  appId: "1:288158376102:web:ead403b2b25e7034f05467",
  measurementId: "G-WS50WJJDNT",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);

function Posters() {
  const [posters, setPosters] = useState([]);

  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setPosters((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // const fetchPosters = async () => {
  // try {
  // const postersCollectionRef = collection(db, "Posters");
  // const snapshot = await getDocs(postersCollectionRef);
  // const postersData = snapshot.docs.map((doc) => doc.data());
  // setPosters(postersData);

  //   const postersCollection = collection(db, "Posters");
  //   const q = query(postersCollection);

  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     const postData = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setPosters(postData);
  //     // setPosters(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  //   });

  //   // } catch (error) {
  //   //   console.error("Error fetching posters:", error);
  //   // }
  //   // };

  //   // fetchPosters();

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

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
        {/* {posters.map((poster) => (
          <Product
            id={poster.doc.id}
            title={poster.doc.data().Title}
            price={poster.Price}
            image={poster["Image upload"]}
          />
        ))} */}

        {/* {posters.map(({id, Title, Price, AccessToken}) => (
          <Product id={id} title={Title} price={Price} image={AccessToken} />
        ))} */}

        {posters.map((url) => {
          return <Product image={url} />;
        })}

        {/* <Product Title="Mind of Gears" price={49.99} image={Gears} />
        <Product title="Eagle" price={49.99} image={eagle} />
        <Product title="car" price={49.99} image={car} />
        <Product title="flours" price={49.99} image={flours} />
        <Product title="city" price={49.99} image={city} />
        <Product title="pond" price={49.99} image={pond} />
        <Product title="bubblegum" price={49.99} image={bubblegum} />
        <Product title="graffiti" price={49.99} image={graffiti} />
        <Product title="samurai" price={49.99} image={samurai} />
        <Product title="sports" price={49.99} image={sports} />
        <Product title="dog" price={49.99} image={dog} />
        <Product title="watch" price={49.99} image={watch} /> */}
      </div>
    </div>
  );
}

export default Posters;
