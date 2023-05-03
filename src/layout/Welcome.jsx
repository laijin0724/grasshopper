import Background from "../assets/svg/hero__background-hills.svg";
import TreeDark from "../assets/svg/hero__tree-dark.svg";
import TreeSkinny from "../assets/svg/hero__tree-skinny.svg";
import MacBook from "../assets/svg/hero__macbook.png";
import Pixel from "../assets/svg/hero__pixel.png";
import Grasshopper from "../assets/svg/hero__grasshopper.svg";
import BushLight from "../assets/svg/hero__bush-light.svg";
import BushDark from "../assets/svg/hero__bush-dark.svg";

const Welcome = () => {
  return (
    <div className="relative h-[873px] sm:h-[calc(700px_+_150_*_(100vw_-_718px)_/_305)] lg:h-[calc(691.2px_+_280.8_*_(100vw_-_1024px)_/_416)] overflow-hidden xl:h-[970px]">
      <div className="max-w-[1440px] top-1/2 left-1/2 transform50 absolute w-full h-full">
        <div className="absolute bottom-0 ">
          <img src={Background} alt="bush_light" />
        </div>
        <div className="absolute z-[4] bottom-0 left-[-13%] w-[208px] h-[69px] sm:bottom-[14.5%] sm:left-[45%] lg:bottom-[25%] sm:h-[calc(45.37361px_+_45.62639_*_(100vw_-_718px)_/_722)] sm:w-[calc(135.12361px_+_135.87639_*_(100vw_-_718px)_/_722)] xl:h-auto xl:w-auto"
        ><img src={BushDark} alt="bush_dard" /></div>
        <div className="absolute z-[3] bottom-[5%] right-[-8%] w-[208px] h-[69px] sm:left-[36%] sm:bottom-[18%] lg:left-[40%] lg:bottom-[28%] sm:h-[calc(62.825px_+_63.175_*_(100vw_-_718px)_/_722)] sm:w-[calc(184.48611px_+_185.51389_*_(100vw_-_718px)_/_722)] xl:h-auto xl:w-auto">
          <img src={BushLight} alt="bush_light" />
        </div>
        <div className="absolute bottom-[24%] right-[37%] z-[2] hidden sm:block h-[calc(132.63055px_+_133.36945_*_(100vw_-_718px)_/_722)] w-[calc(227.36667px_+_228.63333_*_(100vw_-_718px)_/_722)] lg:bottom-[38.25%] lg:right-[34%] lg:h-[calc(132.63055px_+_133.36945_*_(100vw_-_718px)_/_722)] lg:w-[calc(227.36667px_+_228.63333_*_(100vw_-_718px)_/_722)] xl:h-auto xl:w-auto">
          <img src={MacBook} alt="mac_book" />
        </div>
        <div className="absolute z-[2] bottom-[13%] left-[-1.5%] hidden sm:block h-[calc(182.49167px_+_183.50833_*_(100vw_-_718px)_/_722)] w-[calc(135.62222px_+_136.37778_*_(100vw_-_718px)_/_722)] lg:bottom-[19%] xl:h-auto xl:w-auto">
          <img src={TreeDark} alt="tree_dark" />
        </div>
        <div className="absolute z-[2] bottom-[13%] left-[14.5%] hidden sm:block h-[calc(182.49167px_+_183.50833_*_(100vw_-_718px)_/_722)] w-[calc(82.76944px_+_83.23056_*_(100vw_-_718px)_/_722)] lg:bottom-[19%] xl:h-auto xl:w-auto">
          <img src={TreeSkinny} alt="tree_skinny" />
        </div>
        <div className="absolute z-[1] right-[6.5%] bottom-[3%] hidden sm:block h-[calc(293.18333px_+_294.81667_*_(100vw_-_718px)_/_722)] w-[calc(283.70972px_+_285.29028_*_(100vw_-_718px)_/_722)] lg:bottom-[7%] lg:right-[5.5%] xl:h-auto xl:w-auto">
          <img src={Grasshopper} alt="grasshopper" />
        </div>
        <div className="absolute z-[3] left-[50%] bottom-[2.75%] ml-[calc(-104px_+_-27.5_*_(100vw_-_375px)_/_342)] h-[calc(424.36px_+_103.64_*_(100vw_-_375px)_/_342)] w-[calc(208px_+_55_*_(100vw_-_375px)_/_342)] sm:left-auto sm:bottom-[20.25%] sm:ml-0 sm:right-[23%] sm:h-[calc(288.69583px_+_290.30417_*_(100vw_-_718px)_/_722)] sm:w-[calc(148.58611px_+_149.41389_*_(100vw_-_718px)_/_722)] lg:bottom-[32.25%] lg:right-[21%] xl:h-auto xl:w-auto">
          <img src={Pixel} alt="pixel" />
        </div>
      </div>
      <div className="px-10 pt-[30px] text-center lg:pt-[74px] lg:text-left max-w-[1200px] m-auto">
        <h1 className="text-4xl font-medium text-tx-content m-auto mb-5">
          Welcome to Grasshopper, <br /> the coding app for beginners
        </h1>
        <div className="text-lg mb-5 text-tx-content lg:text-2xl">
          Learning to code opens new doors
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Welcome;