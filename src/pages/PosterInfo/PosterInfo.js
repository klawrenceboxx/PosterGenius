import React from "react";
import {useNavigate} from "react-router-dom";
import "./PosterInfo.css";
import dog from "../../DesignAssets/images_posters/dog.png";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";
import {useParams} from "react-router-dom";
import {getDoc, doc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";
import {useState, useEffect, useMemo} from "react";
import {useStateValue} from "../../components/StateProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "../../components/ImageGallery";
import {collection, getDocs} from "firebase/firestore";

const orientations = [
  {label: "PORTRAIT", value: "portrait"},
  {label: "LANDSCAPE", value: "landscape"},
  {label: "SQUARE", value: "square"},
];

const materials = [
  {label: "PREMIUM MATTE", value: "premium-matte"},
  {label: "PREMIUM LUSTER", value: "premium-luster"},
];
// const frames = ["NO FRAME", "BLACK", "WHITE", "NATURAL", "WALNUT"];
// const frames = [
//   {label: "NO FRAME", value: "no-frame"},
//   {label: "BLACK", value: "black"},
//   {label: "WHITE", value: "white"},
//   {label: "RED OAK", value: "red-oak"},
// ];

function PosterInfo() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [data, setData] = useState(null); // Initialize a state variable to store the document data
  const [{basket}, dispatch] = useStateValue();
  const [activeTab, setActiveTab] = useState("productDetails");

  // button options
  const [selectedOrientation, setSelectedOrientation] = useState("portrait");
  const [selectedSize, setSelectedSize] = useState('12"x18"');
  const [selectedMaterial, setSelectedMaterial] = useState("premium-matte");
  const [selectedFrame, setSelectedFrame] = useState("");
  const [sizes, setSizes] = useState([]);
  const [frames, setFrames] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  // New state to store the pricing data fetched from Firebase
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    const fetchPricingData = async () => {
      const pricingCollection = collection(db, "prices");
      const pricingSnapshot = await getDocs(pricingCollection);
      const dataList = pricingSnapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          startPrice: docData.basePrice,
          medium: docData.medium,
          large: docData.large,
          xlarge: docData.xlarge,
          mediumFrame: docData.mediumFrame,
          largeFrame: docData.largeFrame,
          xlargeFrame: docData.xlargeFrame,
        };
      });
      setPricingData(dataList);

      if (dataList.length > 0) {
        setSizes([
          {
            label: '12"x18"',
            value: '12"x18"',
            dollar: dataList[0].medium,
          },
          {
            label: '18"x24"',
            value: '18"x24"',
            dollar: dataList[0].large,
          },
          {
            label: '24"x36"',
            value: '24"x36"',
            dollar: dataList[0].xlarge,
          },
        ]);
        setFrames([
          {
            label: "NO FRAME",
            value: "no-frame",
            medium: 0,
            large: 0,
            xlarge: 0,
          },
          {
            label: "BLACK",
            value: "black",
            medium: dataList[0].mediumFrame,
            large: dataList[0].largeFrame,
            xlarge: dataList[0].xlargeFrame,
          },
          {
            label: "WHITE",
            value: "white",
            medium: dataList[0].mediumFrame,
            large: dataList[0].largeFrame,
            xlarge: dataList[0].xlargeFrame,
          },
          {
            label: "RED OAK",
            value: "red-oak",
            medium: dataList[0].mediumFrame,
            large: dataList[0].largeFrame,
            xlarge: dataList[0].xlargeFrame,
          },
        ]);
        setTotalPrice(dataList[0].startPrice);
      }
    };

    fetchPricingData();
  }, []);

  // get a single document
  const docRef = useMemo(() => doc(db, "posters", id), [id]);

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

  const handleSizeChange = (sizeValue) => {
    // Check if pricingData has data and if the first item is defined

    if (pricingData.length === 0 || !pricingData[0]) return;

    const size = sizes.find((s) => s.value === sizeValue);
    const sizePriceAddition = size ? size.dollar : 0;

    const frame = frames.find((f) => f.value === selectedFrame);
    let framePriceAddition = 0;
    if (frame) {
      if (sizeValue === '12"x18"') framePriceAddition = frame.medium;
      if (sizeValue === '18"x24"') framePriceAddition = frame.large;
      if (sizeValue === '24"x36"') framePriceAddition = frame.xlarge;
    }

    setTotalPrice(
      pricingData[0].startPrice + sizePriceAddition + framePriceAddition
    );
  };

  useEffect(() => {
    handleSizeChange(selectedSize);
  }, [selectedFrame]);

  if (!data) {
    // Show loading state while the data is being fetched
    return <div>Loading...</div>;
  }

  const addToBasket = (event) => {
    event.preventDefault(); // Prevent navigation

    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: data.id,
        title: data.title,
        image: data.url,
        price: totalPrice,
      },
    });
  };

  const element = <FontAwesomeIcon icon={faArrowLeft} />;
  const galleryImages = data.galleryImages.map((url, index) => ({
    id: index,
    url,
  }));

  function ButtonGroup({items, selectedValue, setSelectedValue, onChange}) {
    return (
      <div>
        {items.map((item) => (
          <button
            key={item.value}
            className={`button__Detail ${
              selectedValue === item.value ? "button__Detail--active" : ""
            }`}
            onClick={() => {
              setSelectedValue(item.value);
              if (onChange) onChange(item.value);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="product__detail">
      <section className="hero__detail">
        <div className="button-and-container-wrapper">
          <button
            className="button__Detail"
            onClick={() => navigate("/posters")}
          >
            {element} All Posters
          </button>
          <div className="container__Detail">
            <div className="left__Detail">
              <ImageGallery images={galleryImages} />
            </div>
            <div className="right__Detail">
              <h1>{data.title}</h1>
              <div>
                <div className="right__Detail__options">
                  <h6>ORIENTATION</h6>
                  {/* `...` (template string) allow embedded expressiond ehivh can be included inside `${}`  */}
                  {/* condition ? value_if_true : value_if_false */}
                  <ButtonGroup
                    items={orientations}
                    selectedValue={selectedOrientation}
                    setSelectedValue={setSelectedOrientation}
                  />
                </div>
                <div className="right__Detail__options">
                  <h6>SIZE (Inch)</h6>
                  <ButtonGroup
                    items={sizes}
                    selectedValue={selectedSize}
                    setSelectedValue={setSelectedSize}
                    onChange={handleSizeChange}
                  />
                </div>
                <div className="right__Detail__options">
                  <h6>MATERIAL</h6>
                  <ButtonGroup
                    items={materials}
                    selectedValue={selectedMaterial}
                    setSelectedValue={setSelectedMaterial}
                  />
                </div>
                <div className="right__Detail__options">
                  <h6>FRAMING</h6>
                  <ButtonGroup
                    items={frames}
                    selectedValue={selectedFrame}
                    setSelectedValue={setSelectedFrame}
                  />
                </div>
              </div>
              <button className="button__buy" onClick={addToBasket}>
                ${totalPrice} ADD TO CART
              </button>

              {/* 7-day money back guarantee */}
            </div>
          </div>

          {/* <div className="product__detail__description">

            <div className="line"></div>
            <p>size (inch)</p>
            <ul>
              <li>18.0" x 24.0"</li>
              <li>High-quality paper, vibrant colors</li>
              <li>printed with shiny, holographic foil</li>
              <li>frame not included</li>
            </ul>
            <button onClick={addToBasket}>Add to Cart</button>
          </div> */}
        </div>
      </section>

      {/* <section className="Features__Detail">
        <div className="Features__container">
          <h3>Special Features</h3>
          <div className="Features__Detail__container">
            <div className="Features__Detail__container__feature1">
              <p>Shiny Details</p>
            </div>
            <div className="Features__Detail__container__feature2">
              <p>High-quality print</p>
            </div>
            <div className="Features__Detail__container__feature3">
              <p>Elaborate Illustrations</p>
            </div>
            <div className="Features__Detail__container__feature4">
              <p>Extra heavy Paper</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="FAQ__Detail">
        <div>
          <div>
            <h2
              style={{
                textDecoration:
                  activeTab === "productDetails" ? "underline" : "none",
                cursor: "pointer",
                display: "inline-block",
                marginRight: "20px", // adjust this value for desired spacing
              }}
              onClick={() => setActiveTab("productDetails")}
            >
              Product Details
            </h2>
            <h2
              style={{
                textDecoration: activeTab === "faq" ? "underline" : "none",
                cursor: "pointer",
                display: "inline-block",
                marginRight: "20px", // adjust this value for desired spacing
              }}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </h2>
          </div>
          {activeTab === "productDetails" && (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae diam eu massa aliquam aliquet. Sed euismod, nisl quis
                tincidunt aliquam, nunc nibh aliquet nunc, vitae aliquam nisl
                nunc vitae mauris. Donec euismod, nisl quis tincidunt aliquam,
                nunc nibh aliquet nunc, vitae aliquam nisl nunc vitae mauris.
                Donec euismod, nisl quis tincidunt aliquam, nunc nibh aliquet
              </p>
            </div>
          )}

          {activeTab === "faq" && (
            <div>
              <p>
                Donec euismod, nisl quis tincidunt aliquam, nunc nibh aliquet
                nunc, vitae aliquam nisl nunc vitae mauris. Donec euismod, nisl
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae diam eu massa aliquam aliquet. Sed euismod, nisl quis
                tincidunt aliquam, nunc nibh aliquet nunc, vitae aliquam nisl
                nunc vitae mauris. Donec euismod, nisl quis tincidunt aliquam,
                nunc nibh aliquet nunc, vitae aliquam nisl nunc vitae mauris.
              </p>
            </div>
          )}
        </div>
      </section> */}

      {/* <section className="Promotion__Detail">
        <div className="promotion__container">
          <div className="promotion__Detail__left">
          </div>
          <div className="promotion__Detail__right">
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae diam eu massa aliquam aliquet. Sed euismod, nisl quis
              tincidunt aliquam, nunc nibh aliquet nunc, vitae aliquam nisl nunc
              vitae mauris. Donec euismod, nisl quis tincidunt aliquam,
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="Suggested__Detail">
        <div className="Features__container">
          <h1>You Might Also Like</h1>
          <div className="Suggested__Detail__container">
            <div className="Suggested__Detail__container__item1"> 
              <h3>Title</h3>
              <h3>Price</h3>
            </div>
            <div className="Suggested__Detail__container__item2">
              <img src={koi} alt="" />
              <h3>Title</h3>
              <h3>Price</h3>
            </div>
            <div className="Suggested__Detail__container__item3">
              <h3>Title</h3>
              <h3>Price</h3>
            </div>
            <div className="Suggested__Detail__container__item4">
              <h3>Title</h3>
              <h3>Price</h3>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="Newsletter__Detail">
        <div className="newsletter__container">
          <h1>Join The PosterG Crew</h1>
          <div>
            <p>
              Be the first to know about new products, special releases and much
              more!
            </p>
            <button className="button__Detail">
              sign up to our newsletter
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default PosterInfo;
