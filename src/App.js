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
//3d Art
//Human
import Character1Img1Human_3DArt from "./Assets/3dArt/Human/character1img1.png";
import Character1Img2Human_3DArt from "./Assets/3dArt/Human/character1img2.png";
import Character2Img1Human_3DArt from "./Assets/3dArt/Human/character2img1.png";
import Character2Img2Human_3DArt from "./Assets/3dArt/Human/character2img2.png";
import Character3Img1Human_3DArt from "./Assets/3dArt/Human/character3img1.png";
import Character3Img2Human_3DArt from "./Assets/3dArt/Human/character3img2.png";
import Character4Img1Human_3DArt from "./Assets/3dArt/Human/character4img1.png";
import Character4Img2Human_3DArt from "./Assets/3dArt/Human/character4img2.png";
import Character5Img1Human_3DArt from "./Assets/3dArt/Human/character5img1.png";
import Character5Img2Human_3DArt from "./Assets/3dArt/Human/character5img2.png";
import Character6Img1Human_3DArt from "./Assets/3dArt/Human/character6img1.png";
import Character6Img2Human_3DArt from "./Assets/3dArt/Human/character6img2.png";
import Character6Img3Human_3DArt from "./Assets/3dArt/Human/character6img3.png";
import Character7Img1Human_3DArt from "./Assets/3dArt/Human/character7img1.png";
import Character7Img2Human_3DArt from "./Assets/3dArt/Human/character7img2.png";
import Character8Img1Human_3DArt from "./Assets/3dArt/Human/character8img1.png";
import Character8Img2Human_3DArt from "./Assets/3dArt/Human/character8img2.png";
import Character9Img1Human_3DArt from "./Assets/3dArt/Human/character9img1.png";
import Character9Img2Human_3DArt from "./Assets/3dArt/Human/character9img2.png";
import Character10Img1Human_3DArt from "./Assets/3dArt/Human/character10img1.png";
import Character10Img2Human_3DArt from "./Assets/3dArt/Human/character10img2.png";
import Character11Img1Human_3DArt from "./Assets/3dArt/Human/character11img1.png";
import Character11Img2Human_3DArt from "./Assets/3dArt/Human/character11img2.png";
//Furry
import Character1Img1Furry_3DArt from "./Assets/3dArt/Furry/character1img1.png";
import Character1Img2Furry_3DArt from "./Assets/3dArt/Furry/character1img2.png";
import Character2Img1Furry_3DArt from "./Assets/3dArt/Furry/character2img1.png";
import Character2Img2Furry_3DArt from "./Assets/3dArt/Furry/character2img2.png";
import Character3Img1Furry_3DArt from "./Assets/3dArt/Furry/character3img1.png";
import Character3Img2Furry_3DArt from "./Assets/3dArt/Furry/character3img2.png";
import Character4Img1Furry_3DArt from "./Assets/3dArt/Furry/character4img1.png";
import Character4Img2Furry_3DArt from "./Assets/3dArt/Furry/character4img2.png";
import Character5Img1Furry_3DArt from "./Assets/3dArt/Furry/character5img1.png";
import Character5Img2Furry_3DArt from "./Assets/3dArt/Furry/character5img2.png";
import Character6Img1Furry_3DArt from "./Assets/3dArt/Furry/character6img1.png";
import Character6Img2Furry_3DArt from "./Assets/3dArt/Furry/character6img2.png";
import Character6Vid3Furry_3DArt from "./Assets/3dArt/Furry/character6img3.mp4";
import Character7Img1Furry_3DArt from "./Assets/3dArt/Furry/character7img1.png";
import Character7Img2Furry_3DArt from "./Assets/3dArt/Furry/character7img2.png";
import Character8Img1Furry_3DArt from "./Assets/3dArt/Furry/character8img1.png";
import Character8Img2Furry_3DArt from "./Assets/3dArt/Furry/character8img2.png";
import Character8Img3Furry_3DArt from "./Assets/3dArt/Furry/character8img3.png";
import Character8Vid4Furry_3DArt from "./Assets/3dArt/Furry/character8img4.mp4";
import Character9Img1Furry_3DArt from "./Assets/3dArt/Furry/character9img1.png";
import Character9Img2Furry_3DArt from "./Assets/3dArt/Furry/character9img2.png";
import Character10Img1Furry_3DArt from "./Assets/3dArt/Furry/character10img1.png";
import Character10Img2Furry_3DArt from "./Assets/3dArt/Furry/character10img2.png";
import Character11Img1Furry_3DArt from "./Assets/3dArt/Furry/character11img1.png";
import Character11Img2Furry_3DArt from "./Assets/3dArt/Furry/character11img2.png";
import Character12Img1Furry_3DArt from "./Assets/3dArt/Furry/character12img1.png";
import Character12Img2Furry_3DArt from "./Assets/3dArt/Furry/character12img2.png";
import Character12Img3Furry_3DArt from "./Assets/3dArt/Furry/character12img3.png";
import Character13Img1Furry_3DArt from "./Assets/3dArt/Furry/character13img1.png";
import Character13Img2Furry_3DArt from "./Assets/3dArt/Furry/character13img2.png";
import Character14Img1Furry_3DArt from "./Assets/3dArt/Furry/character14img1.png";
import Character14Img2Furry_3DArt from "./Assets/3dArt/Furry/character14img2.png";
import Character15Img1Furry_3DArt from "./Assets/3dArt/Furry/character15img1.png";
import Character15Img2Furry_3DArt from "./Assets/3dArt/Furry/character15img2.png";
import Character15Vid3Furry_3DArt from "./Assets/3dArt/Furry/character15img3.mp4";
import Character16Img1Furry_3DArt from "./Assets/3dArt/Furry/character16img1.png";
import Character16Img2Furry_3DArt from "./Assets/3dArt/Furry/character16img2.png";
import Character17Img1Furry_3DArt from "./Assets/3dArt/Furry/character17img1.png";
import Character17Img2Furry_3DArt from "./Assets/3dArt/Furry/character17img2.png";
//Twitch
//Image
import Character1Img1_Twitch from "./Assets/Twitch/character1img1.png";
import Character2Img1_Twitch from "./Assets/Twitch/character2img1.png";
import Character3Img1_Twitch from "./Assets/Twitch/character3img1.png";
import Character4Img1_Twitch from "./Assets/Twitch/character4img1.png";
import Character5Img1_Twitch from "./Assets/Twitch/character5img1.png";
//Video
import Character6Vid1_Twitch from "./Assets/Twitch/character6img1.mp4";
import Character7Vid1_Twitch from "./Assets/Twitch/character7img1.mp4";
import Character8Vid1_Twitch from "./Assets/Twitch/character8img1.mp4";
import Character9Vid1_Twitch from "./Assets/Twitch/character9img1.mp4";
import Character10Vid1_Twitch from "./Assets/Twitch/character9img1.mp4";
//Art Room
//Image
import Set3Img1_ArtRoom from "./Assets/ArtRoom/set3img1.png";
import Set7Img1_ArtRoom from "./Assets/ArtRoom/set7img1.png";
import Set10Img1_ArtRoom from "./Assets/ArtRoom/set10img1.png";
import Set11Img1_ArtRoom from "./Assets/ArtRoom/set11img1.png";
import Set12Img1_ArtRoom from "./Assets/ArtRoom/set12img1.png";
import Set13Img1_ArtRoom from "./Assets/ArtRoom/set13img1.png";
import Set14Img1_ArtRoom from "./Assets/ArtRoom/set14img1.png";
import Set15Img1_ArtRoom from "./Assets/ArtRoom/set15img1.png";
import Set16Img1_ArtRoom from "./Assets/ArtRoom/set16img1.png";
import Set17Img1_ArtRoom from "./Assets/ArtRoom/set17img1.png";
import Set18Img1_ArtRoom from "./Assets/ArtRoom/set18img1.png";
import Set19Img1_ArtRoom from "./Assets/ArtRoom/set19img1.png";
import Set20Img1_ArtRoom from "./Assets/ArtRoom/set20img1.png";
import Set21Img1_ArtRoom from "./Assets/ArtRoom/set21img1.png";
//Video
import Set1Vid1_ArtRoom from "./Assets/ArtRoom/set1img1.mp4";
import Set2Vid1_ArtRoom from "./Assets/ArtRoom/set2img1.mp4";
import Set4Vid1_ArtRoom from "./Assets/ArtRoom/set4img1.mp4";
import Set5Vid1_ArtRoom from "./Assets/ArtRoom/set5img1.mp4";
import Set6Vid1_ArtRoom from "./Assets/ArtRoom/set6img1.mp4";
import Set8Vid1_ArtRoom from "./Assets/ArtRoom/set8img1.mp4";
import Set9Vid1_ArtRoom from "./Assets/ArtRoom/set9img1.mp4";
//Comic Book
//Book1
import Book1Page1_ComicBook from "./Assets/ComicBook/Book1/page1.png";
import Book1Page2_ComicBook from "./Assets/ComicBook/Book1/page2.png";
import Book1Page3_ComicBook from "./Assets/ComicBook/Book1/page3.png";
import Book1Page4_ComicBook from "./Assets/ComicBook/Book1/page4.png";
import Book1Page5_ComicBook from "./Assets/ComicBook/Book1/page5.png";
import Book1Page6_ComicBook from "./Assets/ComicBook/Book1/page6.png";
import Book1Page7_ComicBook from "./Assets/ComicBook/Book1/page7.png";
import Book1Page8_ComicBook from "./Assets/ComicBook/Book1/page8.png";
import Book1Page9_ComicBook from "./Assets/ComicBook/Book1/page9.png";
//Book2
import Book2Page1_ComicBook from "./Assets/ComicBook/Book2/page1.png";
import Book2Page2_ComicBook from "./Assets/ComicBook/Book2/page2.png";
import Book2Page3_ComicBook from "./Assets/ComicBook/Book2/page3.png";
import Book2Page4_ComicBook from "./Assets/ComicBook/Book2/page4.png";
import Book2Page5_ComicBook from "./Assets/ComicBook/Book2/page5.png";
import Book2Page6_ComicBook from "./Assets/ComicBook/Book2/page6.png";
import Book2Page7_ComicBook from "./Assets/ComicBook/Book2/page7.png";
import Book2Page8_ComicBook from "./Assets/ComicBook/Book2/page8.png";
import Book2Page9_ComicBook from "./Assets/ComicBook/Book2/page9.png";
import Book2Page10_ComicBook from "./Assets/ComicBook/Book2/page10.png";
import Book2Page11_ComicBook from "./Assets/ComicBook/Book2/page11.png";
import Book2Page12_ComicBook from "./Assets/ComicBook/Book2/page12.png";
import Book2Page13_ComicBook from "./Assets/ComicBook/Book2/page13.png";
import Book2Page14_ComicBook from "./Assets/ComicBook/Book2/page14.png";
import Book2Page15_ComicBook from "./Assets/ComicBook/Book2/page15.png";
//Book3
import Book3Page1_ComicBook from "./Assets/ComicBook/Book3/page1.png";
import Book3Page2_ComicBook from "./Assets/ComicBook/Book3/page2.png";
import Book3Page3_ComicBook from "./Assets/ComicBook/Book3/page3.png";
import Book3Page4_ComicBook from "./Assets/ComicBook/Book3/page4.png";
import Book3Page5_ComicBook from "./Assets/ComicBook/Book3/page5.png";
import Book3Page6_ComicBook from "./Assets/ComicBook/Book3/page6.png";
import Book3Page7_ComicBook from "./Assets/ComicBook/Book3/page7.png";
import Book3Page8_ComicBook from "./Assets/ComicBook/Book3/page8.png";
import Book3Page9_ComicBook from "./Assets/ComicBook/Book3/page9.png";
import Book3Page10_ComicBook from "./Assets/ComicBook/Book3/page10.png";
import Book3Page11_ComicBook from "./Assets/ComicBook/Book3/page11.png";
import Book3Page12_ComicBook from "./Assets/ComicBook/Book3/page12.png";
import Book3Page13_ComicBook from "./Assets/ComicBook/Book3/page13.png";
import Book3Page14_ComicBook from "./Assets/ComicBook/Book3/page14.png";
import Book3Page15_ComicBook from "./Assets/ComicBook/Book3/page15.png";
import Book3Page16_ComicBook from "./Assets/ComicBook/Book3/page16.png";
import Book3Page17_ComicBook from "./Assets/ComicBook/Book3/page17.png";
//Logo & Banner
import Set1LogoImg_LogoBanner from "./Assets/LogoAndBanner/character1img1.png";
import Set1BannerImg_LogoBanner from "./Assets/LogoAndBanner/character1img2.png";
import Set2LogoVid_LogoBanner from "./Assets/LogoAndBanner/character2img1.mp4";
import Set2BannerVid_LogoBanner from "./Assets/LogoAndBanner/character2img2.mp4";
import Set3LogoImg_LogoBanner from "./Assets/LogoAndBanner/character3img1.png";
import Set3BannerImg_LogoBanner from "./Assets/LogoAndBanner/character3img2.png";
import Set4LogoImg_LogoBanner from "./Assets/LogoAndBanner/character4img1.png";
import Set4BannerImg_LogoBanner from "./Assets/LogoAndBanner/character4img2.png";
//Charector Art
import Character1_CharacterArt from "./Assets/CharacterArt/character1.png";
import Character2_CharacterArt from "./Assets/CharacterArt/character2.png";
import Character3_CharacterArt from "./Assets/CharacterArt/character3.png";
import Character4_CharacterArt from "./Assets/CharacterArt/character4.png";
import Character5_CharacterArt from "./Assets/CharacterArt/character5.png";
import Character6_CharacterArt from "./Assets/CharacterArt/character6.png";
import Character7_CharacterArt from "./Assets/CharacterArt/character7.png";
import Character8_CharacterArt from "./Assets/CharacterArt/character8.png";
import Character9_CharacterArt from "./Assets/CharacterArt/character9.png";
import Character10_CharacterArt from "./Assets/CharacterArt/character10.png";
import Character11_CharacterArt from "./Assets/CharacterArt/character11.png";
import Character12_CharacterArt from "./Assets/CharacterArt/character12.png";
import Character13_CharacterArt from "./Assets/CharacterArt/character13.png";
import Character14_CharacterArt from "./Assets/CharacterArt/character14.png";
import Character15_CharacterArt from "./Assets/CharacterArt/character15.png";
import Character16_CharacterArt from "./Assets/CharacterArt/character16.png";
import Character17_CharacterArt from "./Assets/CharacterArt/character17.png";
//Charector Art
import Character1_VRWorld from "./Assets/VRWorld/character1.png";
import Character2_VRWorld from "./Assets/VRWorld/character2.png";
import Character3_VRWorld from "./Assets/VRWorld/character3.png";
import Character4_VRWorld from "./Assets/VRWorld/character4.png";
import Character5_VRWorld from "./Assets/VRWorld/character5.png";
import Character6_VRWorld from "./Assets/VRWorld/character6.png";
import Character7_VRWorld from "./Assets/VRWorld/character7.png";
//DND
import Set1Img1_DND from "./Assets/DND/set1img1.png";
import Set1Img2_DND from "./Assets/DND/set1img2.png";
import Set1Img3_DND from "./Assets/DND/set1img3.png";
import Set2Img1_DND from "./Assets/DND/set2img1.png";
import Set2Img2_DND from "./Assets/DND/set2img2.png";
import Set2Img3_DND from "./Assets/DND/set2img3.png";
import Set2Vid4_DND from "./Assets/DND/set2img4.mp4";
import Set3Img1_DND from "./Assets/DND/set3img1.png";
import Set3Img2_DND from "./Assets/DND/set3img2.png";
import Set3Img3_DND from "./Assets/DND/set3img3.png";

//Reference Sheet
import Character1_ReferenceSheet from "./Assets/ReferenceSheet/character1.png";
import Character2_ReferenceSheet from "./Assets/ReferenceSheet/character2.png";
import Character3_ReferenceSheet from "./Assets/ReferenceSheet/character3.png";
import Character4_ReferenceSheet from "./Assets/ReferenceSheet/character4.png";
import Character5_ReferenceSheet from "./Assets/ReferenceSheet/character5.png";
import Character6_ReferenceSheet from "./Assets/ReferenceSheet/character6.png";
import Character7_ReferenceSheet from "./Assets/ReferenceSheet/character7.png";
import Character8_ReferenceSheet from "./Assets/ReferenceSheet/character8.png";
import Character9_ReferenceSheet from "./Assets/ReferenceSheet/character9.png";
import Character10_ReferenceSheet from "./Assets/ReferenceSheet/character10.png";
import Character11_ReferenceSheet from "./Assets/ReferenceSheet/character11.png";
import Character12_ReferenceSheet from "./Assets/ReferenceSheet/character12.png";


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
  const [comicToggleValue, setComicToggleValue] = useState(false)
  const [comicValue, setComicValue] = useState([])

  const dataTwitch = {
    images: [
      Character1Img1_Twitch,
      Character2Img1_Twitch,
      Character3Img1_Twitch,
      Character4Img1_Twitch,
      Character5Img1_Twitch,
    ],
    video: [
      Character6Vid1_Twitch,
      Character7Vid1_Twitch,
      Character8Vid1_Twitch,
      Character9Vid1_Twitch,
      Character10Vid1_Twitch,
    ]
  };

  const dataArtRoom = {
    set1: {
      video: [Set1Vid1_ArtRoom],
    },
    set2: {
      video: [Set2Vid1_ArtRoom],
    },
    set3: {
      image: [Set3Img1_ArtRoom],
    },
    set4: {
      video: [Set4Vid1_ArtRoom],
    },
    set5: {
      video: [Set5Vid1_ArtRoom],
    },
    set6: {
      video: [Set6Vid1_ArtRoom],
    },
    set7: {
      image: [Set7Img1_ArtRoom],
    },
    set8: {
      video: [Set8Vid1_ArtRoom],
    },
    set9: {
      video: [Set9Vid1_ArtRoom],
    },
    set10: {
      image: [Set10Img1_ArtRoom],
    },
    set11: {
      image: [Set11Img1_ArtRoom],
    },
    set12: {
      image: [Set12Img1_ArtRoom],
    },
    set13: {
      image: [Set13Img1_ArtRoom],
    },
    set14: {
      image: [Set14Img1_ArtRoom],
    },
    set15: {
      image: [Set15Img1_ArtRoom],
    },
    set16: {
      image: [Set16Img1_ArtRoom],
    },
    set17: {
      image: [Set17Img1_ArtRoom],
    },
    set18: {
      image: [Set18Img1_ArtRoom],
    },
    set19: {
      image: [Set19Img1_ArtRoom],
    },
    set20: {
      image: [Set20Img1_ArtRoom],
    },
    set21: {
      image: [Set21Img1_ArtRoom],
    },
  };

  const dataComicBook = {
    Book1: [
      Book1Page1_ComicBook,
      Book1Page2_ComicBook,
      Book1Page3_ComicBook,
      Book1Page4_ComicBook,
      Book1Page5_ComicBook,
      Book1Page6_ComicBook,
      Book1Page7_ComicBook,
      Book1Page8_ComicBook,
      Book1Page9_ComicBook,
    ],
    Book2: [
      Book2Page1_ComicBook,
      Book2Page2_ComicBook,
      Book2Page3_ComicBook,
      Book2Page4_ComicBook,
      Book2Page5_ComicBook,
      Book2Page6_ComicBook,
      Book2Page7_ComicBook,
      Book2Page8_ComicBook,
      Book2Page9_ComicBook,
      Book2Page10_ComicBook,
      Book2Page11_ComicBook,
      Book2Page12_ComicBook,
      Book2Page13_ComicBook,
      Book2Page14_ComicBook,
      Book2Page15_ComicBook,
    ],
    Book3: [
      Book3Page1_ComicBook,
      Book3Page2_ComicBook,
      Book3Page3_ComicBook,
      Book3Page4_ComicBook,
      Book3Page5_ComicBook,
      Book3Page6_ComicBook,
      Book3Page7_ComicBook,
      Book3Page8_ComicBook,
      Book3Page9_ComicBook,
      Book3Page10_ComicBook,
      Book3Page11_ComicBook,
      Book3Page12_ComicBook,
      Book3Page13_ComicBook,
      Book3Page14_ComicBook,
      Book3Page15_ComicBook,
      Book3Page16_ComicBook,
      Book3Page17_ComicBook,
    ],
  };

  const datalogoBanner = {
    set1: {
      logo: {
        image: Set1LogoImg_LogoBanner,
      },
      banner: {
        image: Set1BannerImg_LogoBanner,
      },
    },
    set2: {
      logo: {
        video: Set2LogoVid_LogoBanner,
      },
      banner: {
        video: Set2BannerVid_LogoBanner,
      },
    },
    set3: {
      logo: {
        image: Set3LogoImg_LogoBanner,
      },
      banner: {
        image: Set3BannerImg_LogoBanner,
      },
    },
    set4: {
      logo: {
        image: Set4LogoImg_LogoBanner,
      },
      banner: {
        image: Set4BannerImg_LogoBanner,
      },
    },
  };

  const dataCharacterArt = {
    images: [
      Character1_CharacterArt,
      Character2_CharacterArt,
      Character3_CharacterArt,
      Character4_CharacterArt,
      Character5_CharacterArt,
      Character6_CharacterArt,
      Character7_CharacterArt,
      Character8_CharacterArt,
      Character9_CharacterArt,
      Character10_CharacterArt,
      Character11_CharacterArt,
      Character12_CharacterArt,
      Character13_CharacterArt,
      Character14_CharacterArt,
      Character15_CharacterArt,
      Character16_CharacterArt,
      Character17_CharacterArt,
    ]
  };

  const dataVR = {
    images: [
      Character1_VRWorld,
      Character2_VRWorld,
      Character3_VRWorld,
      Character4_VRWorld,
      Character5_VRWorld,
      Character6_VRWorld,
      Character7_VRWorld,
    ]
  };

  const dataDND = {
    set1: {
      image: [Set1Img1_DND, Set1Img2_DND, Set1Img3_DND],
    },
    set2: {
      image: [Set2Img1_DND, Set2Img2_DND, Set2Img3_DND],
      video: [Set2Vid4_DND],
    },
    set3: {
      image: [Set3Img1_DND, Set3Img2_DND, Set3Img3_DND],
    },
  };

  const data3d = {
    furry: {
      character1: [
        Character1Img1Furry_3DArt,
        Character1Img2Furry_3DArt,
      ],
      character2: [
        Character2Img1Furry_3DArt,
        Character2Img2Furry_3DArt,
      ],
      character3: [
        Character3Img1Furry_3DArt,
        Character3Img2Furry_3DArt,
      ],
      character4: [
        Character4Img1Furry_3DArt,
        Character4Img2Furry_3DArt,
      ],
      character5: [
        Character5Img1Furry_3DArt,
        Character5Img2Furry_3DArt,
      ],
      character6: [
        Character6Img1Furry_3DArt,
        Character6Img2Furry_3DArt,
        {
          video: [Character6Vid3Furry_3DArt],
        },
      ],
      character7: [
        Character7Img1Furry_3DArt,
        Character7Img2Furry_3DArt,
      ],
      character8: [
        Character8Img1Furry_3DArt,
        Character8Img2Furry_3DArt,
        Character8Img3Furry_3DArt,
        {
          video: [Character8Vid4Furry_3DArt],
        },
      ],
      character9: [
        Character9Img1Furry_3DArt,
        Character9Img2Furry_3DArt,
      ],
      character10: [
        Character10Img1Furry_3DArt,
        Character10Img2Furry_3DArt,
      ],
      character11: [
        Character11Img1Furry_3DArt,
        Character11Img2Furry_3DArt,
      ],
      character12: [
        Character12Img1Furry_3DArt,
        Character12Img2Furry_3DArt,
        Character12Img3Furry_3DArt,
      ],
      character13: [
        Character13Img1Furry_3DArt,
        Character13Img2Furry_3DArt,
      ],
      character14: [
        Character14Img1Furry_3DArt,
        Character14Img2Furry_3DArt,
      ],
      character15: [
        Character15Img1Furry_3DArt,
        Character15Img2Furry_3DArt,
        {
          video: [Character15Vid3Furry_3DArt],
        },
      ],
      character16: [
        Character16Img1Furry_3DArt,
        Character16Img2Furry_3DArt,
      ],
      character17: [
        Character17Img1Furry_3DArt,
        Character17Img2Furry_3DArt,
      ],
    },
    human: {
      character1: [
        Character1Img1Human_3DArt,
        Character1Img2Human_3DArt,
      ],
      character2: [
        Character2Img1Human_3DArt,
        Character2Img2Human_3DArt,
      ],
      character3: [
        Character3Img1Human_3DArt,
        Character3Img2Human_3DArt,
      ],
      character4: [
        Character4Img1Human_3DArt,
        Character4Img2Human_3DArt,
      ],
      character5: [
        Character5Img1Human_3DArt,
        Character5Img2Human_3DArt,
      ],
      character6: [
        Character6Img1Human_3DArt,
        Character6Img2Human_3DArt,
        Character6Img3Human_3DArt,
      ],
      character7: [
        Character7Img1Human_3DArt,
        Character7Img2Human_3DArt,
      ],
      character8: [
        Character8Img1Human_3DArt,
        Character8Img2Human_3DArt,
      ],
      character9: [
        Character9Img1Human_3DArt,
        Character9Img2Human_3DArt,
      ],
      character10: [
        Character10Img1Human_3DArt,
        Character10Img2Human_3DArt,
      ],
      character11: [
        Character11Img1Human_3DArt,
        Character11Img2Human_3DArt,
      ],
    }
  };

  const dataRefernce = {
    images: [
      Character1_ReferenceSheet,
      Character2_ReferenceSheet,
      Character3_ReferenceSheet,
      Character4_ReferenceSheet,
      Character5_ReferenceSheet,
      Character6_ReferenceSheet,
      Character7_ReferenceSheet,
      Character8_ReferenceSheet,
      Character9_ReferenceSheet,
      Character10_ReferenceSheet,
      Character11_ReferenceSheet,
      Character12_ReferenceSheet,
    ]
  }

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

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, 5000)
  })

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
      <div className="main-img-div" >
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
      < div className="main-img-div" >
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
      < div className="main-img-div" >
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
      < div className="main-img-div" >
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
      < div className="main-img-div" >
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
      < div className="main-img-div" >
        <h1>
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
      < div className="main-img-div" >
        <h1>
          <p data-aos="fade-right" data-aos-duration={600} >
            Logo and Banner
          </p>
          <SvgComponent />
        </h1>
        <Container className="img-container">
          {
            datalogoBanner && Object.entries(datalogoBanner).map(([key, value]) => {
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