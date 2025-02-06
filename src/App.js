import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Container } from "react-bootstrap";
import { Carousel } from 'antd';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Image } from 'antd';
import { useEffect, useState } from "react";
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

const Portfolio = () => {
  const [comicToggleValue, setComicToggleValue] = useState(false);
  const [comicValue, setComicValue] = useState([]);

  const dataTwitch = {
    images: [
      require("./Assets/Twitch/character1img1.png"),
      require("./Assets/Twitch/character2img1.png"),
      require("./Assets/Twitch/character3img1.png"),
      require("./Assets/Twitch/character4img1.png"),
      require("./Assets/Twitch/character5img1.png"),
    ],
    video: [
      require("./Assets/Twitch/character6img1.mp4"),
      require("./Assets/Twitch/character7img1.mp4"),
      require("./Assets/Twitch/character8img1.mp4"),
      require("./Assets/Twitch/character9img1.mp4"),
      require("./Assets/Twitch/character10img1.mp4"),
    ]
  };

  const dataArtRoom = {
    set1: {
      video: [require("./Assets/ArtRoom/set1img1.mp4")],
    },
    set2: {
      video: [require("./Assets/ArtRoom/set2img1.mp4")],
    },
    set3: {
      image: [require("./Assets/ArtRoom/set3img1.png")],
    },
    set4: {
      video: [require("./Assets/ArtRoom/set4img1.mp4")],
    },
    set5: {
      video: [require("./Assets/ArtRoom/set5img1.mp4")],
    },
    set6: {
      video: [require("./Assets/ArtRoom/set6img1.mp4")],
    },
    set7: {
      image: [require("./Assets/ArtRoom/set7img1.png")],
    },
    set8: {
      video: [require("./Assets/ArtRoom/set8img1.mp4")],
    },
    set9: {
      video: [require("./Assets/ArtRoom/set9img1.mp4")],
    },
    set10: {
      image: [require("./Assets/ArtRoom/set10img1.png")],
    },
    set11: {
      image: [require("./Assets/ArtRoom/set11img1.png")],
    },
    set12: {
      image: [require("./Assets/ArtRoom/set12img1.png")],
    },
    set13: {
      image: [require("./Assets/ArtRoom/set13img1.png")],
    },
    set14: {
      image: [require("./Assets/ArtRoom/set14img1.png")],
    },
    set15: {
      image: [require("./Assets/ArtRoom/set15img1.png")],
    },
    set16: {
      image: [require("./Assets/ArtRoom/set16img1.png")],
    },
    set17: {
      image: [require("./Assets/ArtRoom/set17img1.png")],
    },
    set18: {
      image: [require("./Assets/ArtRoom/set18img1.png")],
    },
    set19: {
      image: [require("./Assets/ArtRoom/set19img1.png")],
    },
    set20: {
      image: [require("./Assets/ArtRoom/set20img1.png")],
    },
    set21: {
      image: [require("./Assets/ArtRoom/set21img1.png")],
    },
  };

  const dataComicBook = {
    Book1: Array.from({ length: 9 }, (_, i) =>
      require(`./Assets/ComicBook/Book1/page${i + 1}.png`)
    ),
    Book2: Array.from({ length: 15 }, (_, i) =>
      require(`./Assets/ComicBook/Book2/page${i + 1}.png`)
    ),
    Book3: Array.from({ length: 17 }, (_, i) =>
      require(`./Assets/ComicBook/Book3/page${i + 1}.png`)
    ),
  };

  const dataLogoBanner = {
    set1: {
      logo: {
        image: require("./Assets/LogoAndBanner/character1img1.png"),
      },
      banner: {
        image: require("./Assets/LogoAndBanner/character1img2.png"),
      },
    },
    set2: {
      logo: {
        video: require("./Assets/LogoAndBanner/character2img1.mp4"),
      },
      banner: {
        video: require("./Assets/LogoAndBanner/character2img2.mp4"),
      },
    },
    set3: {
      logo: {
        image: require("./Assets/LogoAndBanner/character3img1.png"),
      },
      banner: {
        image: require("./Assets/LogoAndBanner/character3img2.png"),
      },
    },
    set4: {
      logo: {
        image: require("./Assets/LogoAndBanner/character4img1.png"),
      },
      banner: {
        image: require("./Assets/LogoAndBanner/character4img2.png"),
      },
    },
  };

  const dataCharacterArt = {
    images: [
      require("./Assets/CharacterArt/character1.png"),
      require("./Assets/CharacterArt/character2.png"),
      require("./Assets/CharacterArt/character3.png"),
      require("./Assets/CharacterArt/character4.png"),
      require("./Assets/CharacterArt/character5.png"),
      require("./Assets/CharacterArt/character6.png"),
      require("./Assets/CharacterArt/character7.png"),
      require("./Assets/CharacterArt/character8.png"),
      require("./Assets/CharacterArt/character9.png"),
      require("./Assets/CharacterArt/character10.png"),
      require("./Assets/CharacterArt/character11.png"),
      require("./Assets/CharacterArt/character12.png"),
      require("./Assets/CharacterArt/character13.png"),
      require("./Assets/CharacterArt/character14.png"),
      require("./Assets/CharacterArt/character15.png"),
      require("./Assets/CharacterArt/character16.png"),
      require("./Assets/CharacterArt/character17.png"),
    ]
  };

  const dataVR = {
    images: [
      require("./Assets/VRWorld/character1.png"),
      require("./Assets/VRWorld/character2.png"),
      require("./Assets/VRWorld/character3.png"),
      require("./Assets/VRWorld/character4.png"),
      require("./Assets/VRWorld/character5.png"),
      require("./Assets/VRWorld/character6.png"),
      require("./Assets/VRWorld/character7.png"),
    ]
  };

  const dataDND = {
    set1: {
      image: [
        require("./Assets/DND/set1img1.png"),
        require("./Assets/DND/set1img2.png"),
        require("./Assets/DND/set1img3.png"),
      ],
    },
    set2: {
      image: [
        require("./Assets/DND/set2img1.png"),
        require("./Assets/DND/set2img2.png"),
        require("./Assets/DND/set2img3.png"),
      ],
      video: [require("./Assets/DND/set2img4.mp4")],
    },
    set3: {
      image: [
        require("./Assets/DND/set3img1.png"),
        require("./Assets/DND/set3img2.png"),
        require("./Assets/DND/set3img3.png"),
      ],
    },
  };

  const data3d = {
    furry: {
      character1: [
        require("./Assets/3dArt/Furry/character1img1.png"),
        require("./Assets/3dArt/Furry/character1img2.png"),
      ],
      character2: [
        require("./Assets/3dArt/Furry/character2img1.png"),
        require("./Assets/3dArt/Furry/character2img2.png"),
      ],
      character3: [
        require("./Assets/3dArt/Furry/character3img1.png"),
        require("./Assets/3dArt/Furry/character3img2.png"),
      ],
      character4: [
        require("./Assets/3dArt/Furry/character4img1.png"),
        require("./Assets/3dArt/Furry/character4img2.png"),
      ],
      character5: [
        require("./Assets/3dArt/Furry/character5img1.png"),
        require("./Assets/3dArt/Furry/character5img2.png"),
      ],
      character6: [
        require("./Assets/3dArt/Furry/character6img1.png"),
        require("./Assets/3dArt/Furry/character6img2.png"),
        {
          video: [require("./Assets/3dArt/Furry/character6img3.mp4")],
        },
      ],
      character7: [
        require("./Assets/3dArt/Furry/character7img1.png"),
        require("./Assets/3dArt/Furry/character7img2.png"),
      ],
      character8: [
        require("./Assets/3dArt/Furry/character8img1.png"),
        require("./Assets/3dArt/Furry/character8img2.png"),
        require("./Assets/3dArt/Furry/character8img3.png"),
        {
          video: [require("./Assets/3dArt/Furry/character8img4.mp4")],
        },
      ],
      character9: [
        require("./Assets/3dArt/Furry/character9img1.png"),
        require("./Assets/3dArt/Furry/character9img2.png"),
      ],
      character10: [
        require("./Assets/3dArt/Furry/character10img1.png"),
        require("./Assets/3dArt/Furry/character10img2.png"),
      ],
      character11: [
        require("./Assets/3dArt/Furry/character11img1.png"),
        require("./Assets/3dArt/Furry/character11img2.png"),
      ],
      character12: [
        require("./Assets/3dArt/Furry/character12img1.png"),
        require("./Assets/3dArt/Furry/character12img2.png"),
        require("./Assets/3dArt/Furry/character12img3.png"),
      ],
      character13: [
        require("./Assets/3dArt/Furry/character13img1.png"),
        require("./Assets/3dArt/Furry/character13img2.png"),
      ],
      character14: [
        require("./Assets/3dArt/Furry/character14img1.png"),
        require("./Assets/3dArt/Furry/character14img2.png"),
      ],
      character15: [
        require("./Assets/3dArt/Furry/character15img1.png"),
        require("./Assets/3dArt/Furry/character15img2.png"),
        {
          video: [require("./Assets/3dArt/Furry/character15img3.mp4")],
        },
      ],
      character16: [
        require("./Assets/3dArt/Furry/character16img1.png"),
        require("./Assets/3dArt/Furry/character16img2.png"),
      ],
      character17: [
        require("./Assets/3dArt/Furry/character17img1.png"),
        require("./Assets/3dArt/Furry/character17img2.png"),
      ],
    },
    human: {
      character1: [
        require("./Assets/3dArt/Human/character1img1.png"),
        require("./Assets/3dArt/Human/character1img2.png"),
      ],
      character2: [
        require("./Assets/3dArt/Human/character2img1.png"),
        require("./Assets/3dArt/Human/character2img2.png"),
      ],
      character3: [
        require("./Assets/3dArt/Human/character3img1.png"),
        require("./Assets/3dArt/Human/character3img2.png"),
      ],
      character4: [
        require("./Assets/3dArt/Human/character4img1.png"),
        require("./Assets/3dArt/Human/character4img2.png"),
      ],
      character5: [
        require("./Assets/3dArt/Human/character5img1.png"),
        require("./Assets/3dArt/Human/character5img2.png"),
      ],
      character6: [
        require("./Assets/3dArt/Human/character6img1.png"),
        require("./Assets/3dArt/Human/character6img2.png"),
        require("./Assets/3dArt/Human/character6img3.png"),
      ],
      character7: [
        require("./Assets/3dArt/Human/character7img1.png"),
        require("./Assets/3dArt/Human/character7img2.png"),
      ],
      character8: [
        require("./Assets/3dArt/Human/character8img1.png"),
        require("./Assets/3dArt/Human/character8img2.png"),
      ],
      character9: [
        require("./Assets/3dArt/Human/character9img1.png"),
        require("./Assets/3dArt/Human/character9img2.png"),
      ],
      character10: [
        require("./Assets/3dArt/Human/character10img1.png"),
        require("./Assets/3dArt/Human/character10img2.png"),
      ],
      character11: [
        require("./Assets/3dArt/Human/character11img1.png"),
        require("./Assets/3dArt/Human/character11img2.png"),
      ],
    },
  };

  const dataRefernce = {
    images: [
      require("./Assets/ReferenceSheet/character1.png"),
      require("./Assets/ReferenceSheet/character2.png"),
      require("./Assets/ReferenceSheet/character3.png"),
      require("./Assets/ReferenceSheet/character4.png"),
      require("./Assets/ReferenceSheet/character5.png"),
      require("./Assets/ReferenceSheet/character6.png"),
      require("./Assets/ReferenceSheet/character7.png"),
      require("./Assets/ReferenceSheet/character8.png"),
      require("./Assets/ReferenceSheet/character9.png"),
      require("./Assets/ReferenceSheet/character10.png"),
      require("./Assets/ReferenceSheet/character11.png"),
      require("./Assets/ReferenceSheet/character12.png"),
    ]
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define the handler for the resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, 5000)
  });

  return (
    <div onContextMenu={handleContextMenu}>
      {
        showLoader && <Loader />
      }
      <Navbar />
      {/* 3D Avatar */}
      <div className="main-img-div" id='3dAvatar'>
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
            data3d && Object.entries(data3d.human).map(([key, value]) => {
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
            data3d && Object.entries(data3d.furry).map(([key, value]) => {
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
      {/* Character Art */}
      <div className="main-img-div" id='charcterArt'>
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Character Art
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataCharacterArt && dataCharacterArt.images.map((value, key) => {
              return (
                <>
                  <div className='character-art-img-div' key={key}>
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
      < div className="main-img-div" id='twitch' >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Twitch
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataTwitch && dataTwitch.images.map((v, i) => (
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
            dataTwitch && dataTwitch.video.map((v, i) => {
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
      < div className="main-img-div" id='referenceSheets'>
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Reference Sheets
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataRefernce && dataRefernce.images.map((v, i) => (
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
      < div className="main-img-div" id='vRWorld'>
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            VR World
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataVR && dataVR.images.map((v, i) => (
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
      < div className="main-img-div" id='artRoom'>
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Art Room
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataArtRoom && Object.entries(dataArtRoom).map(([key, value]) => {
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
      < div className="main-img-div" id='dnd'>
        <h1 id='dnd'>
          <p data-aos="fade-right" data-aos-duration={600} >
            DND
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataDND && Object.entries(dataDND).map(([key, value]) => {
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
      < div className="main-img-div" id='logoAndBanner'>
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Logo and Banner
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            dataLogoBanner && Object.entries(dataLogoBanner).map(([key, value]) => {
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
      < div className="main-img-div" id='comicBook'>
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Comic Book
          </p>
          <SvgComponent />
        </h1>
        {windowWidth < 768 ?
          <Container className="comic-container">
            {dataComicBook && Object.entries(dataComicBook).map(([key, value]) => (
              <ComicBookViewer
                key={key}
                value={value}
              />
            ))}
          </Container>
          :
          <Container className="comic-container">
            {dataComicBook && Object.entries(dataComicBook).map(([key, value]) => {
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

export default Portfolio;