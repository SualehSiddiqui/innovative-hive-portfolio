import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Container } from "react-bootstrap";
import { Carousel } from 'antd';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Image } from 'antd';
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './index.js'; // Make sure this path is correct
import SvgComponent from "./Components/HeadingSvg/index.jsx";
import HTMLFlipBook from "react-pageflip";
import { ImCross } from "react-icons/im";
import Loader from "./Components/Loader/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import StickyIcons from "./Components/StickyIcons/index.jsx";

const CustomPrevArrow = ({ onClick }) => (
  <div className="carousel-arrows left-arrow" onClick={onClick}>
    <IoIosArrowBack />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="carousel-arrows right-arrow" onClick={onClick}>
    <IoIosArrowForward />
  </div>
);

const ComicBookViewer = ({ value }) => {
  const [bookKey, setBookKey] = useState(0);

  // Update key to force re-render
  useEffect(() => {
    setBookKey(prevKey => prevKey + 1);
  }, [value]);

  return (
    <>
      <HTMLFlipBook
        key={bookKey}
        width={300}
        height={500}
        showCover={true}
        className="mt-3"
        style={{ height: '500px', width: '300px' }}
      >
        {value.map((v, i) => (
          <div className={i === 0 ? "demoPage demo-page-1" : "demoPage"} key={i}>
            <img src={v} alt={`img-${i}`} />
          </div>
        ))}
      </HTMLFlipBook>
    </>
  );
};

const GraphicDesigning = () => {
  const [comicToggleValue, setComicToggleValue] = useState(false)
  const [comicValue, setComicValue] = useState([])
  const [data3d, setData3d] = useState([]);
  // const [data2d, setData2d] = useState([]);
  const [dataRefernce, setDataRefernce] = useState([]);
  const [dataVR, setDataVR] = useState([]);
  const [dataArtRoom, setDataArtRoom] = useState([]);
  const [dataTwitch, setDataTwitch] = useState([]);
  const [dataDND, setDataDND] = useState([]);
  const [datalogoBanner, setDatalogoBanner] = useState([]);
  const [dataComicBook, setDataComicBook] = useState([]);
  const [dataCharectorArt, setDataCharectorArt] = useState([]);

  const get3dData = async () => {
    try {
      setShowLoader(true);
      const q = query(collection(db, "Images"), where("type", "==", "3d"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData3d(imageList);
      setShowLoader(false);
    } catch (error) {
      console.error("Error fetching 3D images: ", error);
    }
  };

  // const get2dData = async () => {
  //   setShowLoader(true);
  //   try {
  //     const q = query(collection(db, "Images"), where("type", "==", "2d"));
  //     const querySnapshot = await getDocs(q);
  //     const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //     setData2d(imageList);
  //     setShowLoader(false)
  //   } catch (error) {
  //     console.error("Error fetching 2D images: ", error);
  //   }
  // };

  const getRefernceData = async () => {
    try {
      setShowLoader(false)
      const q = query(collection(db, "Images"), where("type", "==", "reference"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataRefernce(imageList);
      setShowLoader(false)
    } catch (error) {
      console.error("Error fetching 2D images: ", error);
    }
  };

  const getVRData = async () => {
    try {
      setShowLoader(true)
      const q = query(collection(db, "Images"), where("type", "==", "vr"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataVR(imageList);
      setShowLoader(false)
    } catch (error) {
      console.error("Error fetching 2D images: ", error);
    }
  };

  const getTwitchData = async () => {
    try {
      setShowLoader(true);
      const q = query(collection(db, "Images"), where("type", "==", "twitch"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataTwitch(imageList);
      setShowLoader(false);
    } catch (error) {
      console.error("Error fetching 2D images: ", error);
    }
  };

  const getArtRoom = async () => {
    try {
      setShowLoader(true);
      const q = query(collection(db, "Images"), where("type", "==", "art room"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataArtRoom(imageList);
      setShowLoader(false);
    } catch (error) {
      console.error("Error fetching 2D images: ", error);
    }
  };

  const getDND = async () => {
    try {
      setShowLoader(true);
      const q = query(collection(db, "Images"), where("type", "==", "dnd"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataDND(imageList);
      setShowLoader(false);
    } catch (error) {
      console.error("Error fetching 2D images: ", error);
    }
  };

  const getlogoBanner = async () => {
    try {
      setShowLoader(true);
      const q = query(collection(db, "Images"), where("type", "==", "logo/banner"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDatalogoBanner(imageList);
      setShowLoader(false);
    } catch (error) {
      console.error("Error fetching 2D images: ", error);
    }
  };

  const getComicBook = async () => {
    try {
      setShowLoader(true);
      const q = query(collection(db, "Images"), where("type", "==", "comic book"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataComicBook(imageList);
      setShowLoader(false);
    } catch (error) {
      console.error("Error fetching 2D images: ", error);
    }
  };

  const getCharectorArt = async () => {
    try {
      setShowLoader(true);
      const q = query(collection(db, "Images"), where("type", "==", "charector art"));
      const querySnapshot = await getDocs(q);
      const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataCharectorArt(imageList);
      setShowLoader(false);
    } catch (error) {
      console.error("Error fetching 2D images: ", error);
    }
  };

  useEffect(() => {
    get3dData();
    // get2dData();
    getRefernceData();
    getVRData();
    getTwitchData();
    getArtRoom();
    getDND();
    getlogoBanner();
    getComicBook();
    getCharectorArt();
  }, []);

  // Define a state variable to store the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define the handler for the resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);
  }, []); // The dependency array is empty, so this effect runs only once

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const [showLoader, setShowLoader] = useState(false);

  return (
    <div onContextMenu={handleContextMenu}>
      {
        showLoader && <Loader />
      }
      <Navbar />
      {/* 3D Avatar */}
      <div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            3D Avatar
          </p>
          <SvgComponent />
        </h1>
        <h2 data-aos="fade-left" data-aos-duration={600} >
          Human
        </h2>
        <Container className="img-container">
          {
            data3d[0] && Object.entries(data3d[0].Human).map(([key, value]) => {
              return (
                <div className="img-div" key={key}>
                  <Carousel
                    arrows
                    prevArrow={<CustomPrevArrow />}
                    nextArrow={<CustomNextArrow />}
                    infinite={true}
                    autoplay={true}
                    effect={'scrollx'}
                    // fade={true}
                    autoplaySpeed={10000}
                    className="main-carousel"
                  >
                    {value && value.map((v, i) => {
                      return (
                        <div className='carousel-div' key={i}>
                          <Image
                            width={windowWidth < 430 ? 300 : 350}
                            height={windowWidth < 430 ? 350 : 400}
                            src={v}
                            alt="Image"
                          />
                        </div>
                      )
                    })}
                  </Carousel>
                </div>
              )
            })
          }
        </Container>
        <div className='division-line' ></div>
        <h2 data-aos="fade-left" data-aos-duration={600} >
          Furry
        </h2>
        <Container className="img-container">
          {
            data3d[0] && Object.entries(data3d[0].Furri).map(([key, value]) => {
              return (
                <div className="img-div" key={key}>
                  <Carousel
                    arrows
                    prevArrow={<CustomPrevArrow />}
                    nextArrow={<CustomNextArrow />}
                    infinite={true}
                    autoplay={true}
                    fade={true}
                    autoplaySpeed={10000}
                    className="main-carousel"
                  >
                    {
                      value.map((v, i) => {
                        if (v.video) {
                          return (
                            <>
                              {
                                v.video.map((v, i) => {
                                  return (
                                    <div className='carousel-div' key={i}>
                                      <video
                                        width={windowWidth < 430 ? 300 : 350}
                                        height={windowWidth < 430 ? 350 : 400}
                                        muted
                                        autoPlay
                                        loop
                                        style={{ objectFit: 'cover' }}
                                      >
                                        <source style={{ width: '100%', height: '100%' }} src={v} type="video/mp4" />
                                      </video>
                                    </div>
                                  )
                                })
                              }
                            </>
                          )
                        } else {
                          return (
                            <div className='carousel-div' key={i}>
                              <Image
                                width={windowWidth < 430 ? 300 : 350}
                                height={windowWidth < 430 ? 350 : 400}
                                src={v}
                                alt="Image"
                              />
                            </div>
                          )
                        }
                      })}
                  </Carousel>
                </div>
              )
            })
          }
        </Container>
      </div >
      {/* 2D Art */}
      {/* < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            2D Art
          </p>
          <SvgComponent />
        </h1>
        <h2 data-aos="fade-left" data-aos-duration={600} >
          Human
        </h2>
        <Container className="img-container">
          {
            data2d[0] && Object.entries(data2d[0].Human).map(([key, value]) => {
              return (
                <div className="img-div" key={key}>
                  <Image
                    src={value}
                    alt="img"
                    width={windowWidth < 430 ? 300 : 350}
                    height={windowWidth < 430 ? 350 : 400}
                  />
                </div>
              )
            })
          }
        </Container>
      </div > */}
      {/* Charector Art */}
      <div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Character Art
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataCharectorArt[0] && Object.entries(dataCharectorArt[0].images).map(([key, value]) => {
              return (
                <>
                  <div className='charector-art-img-div' key={key}>
                    <Image
                      width={windowWidth < 430 ? 300 : 350}
                      height={windowWidth < 430 ? 350 : 400}
                      src={value}
                      alt="Image"
                    />
                  </div>
                </>
              )
            })
          }
        </Container>
      </div >
      {/* Twitch */}
      < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Twitch
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataTwitch[0] && dataTwitch[0].images.map((v, i) => (
              <div className="twitch-img-div" key={i}>
                <Image
                  src={v}
                  alt="Images"
                  width={windowWidth < 430 ? 300 : 400}
                  height={200}
                />
              </div>
            ))
          }
          {
            dataTwitch[0] && dataTwitch[0].video.map((v, i) => {
              return (
                <div className="twitch-img-div" key={i}>
                  <video
                    width={windowWidth < 430 ? 300 : 400}
                    height={200}
                    muted
                    autoPlay
                    loop
                    style={{ objectFit: 'cover' }}
                  >
                    <source style={{ width: '100%', height: '100%' }} src={v} type="video/mp4" />
                  </video>
                </div>
              )
            })
          }
        </Container>
      </div >
      {/* Reference Sheet */}
      < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Reference Sheets
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataRefernce[0] && dataRefernce[0].images.map((v, i) => (
              <div className="reference-img-div" key={i}>
                <Image
                  src={v}
                  alt="img"
                  width={300}
                  height={windowWidth < 430 ? 270 : 300}
                />
              </div>
            ))
          }
        </Container>
      </div >
      {/* Vr World */}
      < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            VR World
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataVR[0] && dataVR[0].images.map((v, i) => (
              <div className="twitch-img-div" key={i}>
                <Image
                  src={v}
                  alt="Images"
                  width={windowWidth < 430 ? 300 : 400}
                  height={200}
                />
              </div>
            ))
          }
        </Container>
      </div >
      {/* Art Room */}
      < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Art Room
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataArtRoom[0] && Object.entries(dataArtRoom[0].data).map(([key, value]) => {
              return (
                <>
                  {
                    value.image && value.image.map((v, i) => {
                      return (
                        <div className="twitch-img-div" key={i}>
                          <Image
                            src={v}
                            alt="Images"
                            width={windowWidth < 430 ? 300 : 400}
                            height={200}
                          />
                        </div>
                      )
                    })
                  }
                  {
                    value.video && value.video.map((v, i) => {
                      return (
                        <div className="twitch-img-div" key={i}>
                          <video
                            width={windowWidth < 430 ? 300 : 400}
                            height={200}
                            muted
                            autoPlay
                            loop
                            style={{ objectFit: 'cover' }}
                          >
                            <source style={{ width: '100%', height: '100%' }} src={v} type="video/mp4" />
                          </video>
                        </div>
                      )
                    })
                  }
                </>
              )
            })
          }
        </Container>
      </div >
      {/* DND */}
      < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            DND
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataDND[0] && Object.entries(dataDND[0].data).map(([key, value]) => {
              return (
                <>
                  {
                    value.image && value.image.map((v, i) => {
                      return (
                        <div className="dnd-img-div" key={i}>
                          <Image
                            src={v}
                            alt="Images"
                            width={windowWidth < 430 ? 300 : 400}
                            height={windowWidth < 430 ? 350 : 500}
                          />
                        </div>
                      )
                    })
                  }
                  {
                    value.video && value.video.map((v, i) => {
                      return (
                        <div className="img-div twitch-img-div dnd-img-div" key={i}>
                          <video
                            width={windowWidth < 430 ? 300 : 400}
                            height={windowWidth < 430 ? 350 : 500}
                            muted
                            autoPlay
                            loop
                            style={{ objectFit: 'cover' }}
                          >
                            <source style={{ width: '100%', height: '100%' }} src={v} type="video/mp4" />
                          </video>
                        </div>
                      )
                    })
                  }
                </>
              )
            })
          }
        </Container>
      </div >
      {/* logo/banner */}
      < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Logo and Banner
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            datalogoBanner[0] && Object.entries(datalogoBanner[0].data).map(([key, value]) => {
              return (
                <>
                  {
                    value.logo && value.logo.image &&
                    <div className="logo-img-div" key={value.logo.image}>
                      <Image
                        src={value.logo.image}
                        alt="Images"
                        width={300}
                        height={300}
                      />
                    </div>
                  }
                  {
                    value.logo && value.logo.video &&
                    <div className="logo-img-div" key={value.logo.video}>
                      <video
                        width={300}
                        height={300}
                        muted
                        autoPlay
                        loop
                        style={{ objectFit: 'cover' }}
                      >
                        <source style={{ width: '100%', height: '100%' }} src={value.logo.video} type="video/mp4" />
                      </video>
                    </div>
                  }
                  {
                    value.banner && value.banner.image &&
                    <div className="twitch-img-div" key={value.banner.image}>
                      <Image
                        src={value.banner.image}
                        alt="Images"
                        width={windowWidth < 430 ? 300 : 400}
                        height={200}
                      />
                    </div>
                  }
                  {
                    value.banner && value.banner.video &&
                    <div className="twitch-img-div" key={value.banner.video}>
                      <video
                        width={windowWidth < 430 ? 300 : 400}
                        height={200}
                        muted
                        autoPlay
                        loop
                        style={{ objectFit: 'cover' }}
                      >
                        <source style={{ width: '100%', height: '100%' }} src={value.banner.video} type="video/mp4" />
                      </video>
                    </div>
                  }
                </>
              )
            })
          }
        </Container>
      </div >
      {/* Comic Book */}
      < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Comic Book
          </p>
          <SvgComponent />
        </h1>
        {windowWidth < 768 ?
          <Container className="comic-container">
            {dataComicBook[0] && Object.entries(dataComicBook[0].Books).map(([key, value]) => (
              <ComicBookViewer
                key={key}
                value={value}
              />
            ))}
          </Container>
          :
          <Container className="comic-container">
            {dataComicBook[0] && Object.entries(dataComicBook[0].Books).map(([key, value]) => {
              return (
                <>
                  <input
                    type="checkbox"
                    checked={comicToggleValue}
                    id="comic-toggle"
                    onChange={e => {
                      setComicToggleValue(!comicToggleValue)
                    }}
                  />
                  <label onClick={e => {
                    setComicValue(value)
                  }}
                    htmlFor="comic-toggle"
                    className="comic-preview  demo-page demo-page-1"
                    key={key}
                  >
                    <img src={value[0]} alt={'img'} />
                  </label>
                </>
              )
            })}
            <div className="comic-book-div">
              <div>
                <span onClick={e => setComicToggleValue(false)}>
                  <ImCross />
                </span>
                <ComicBookViewer
                  key={0}
                  value={comicValue}
                />
              </div>
            </div>
          </Container>
        }
      </div >
      <StickyIcons />
    </div>
  )
}




export default GraphicDesigning;