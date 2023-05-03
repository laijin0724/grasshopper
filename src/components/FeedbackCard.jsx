import { useEffect, useState } from "react";
import DeviceScreen1 from "../assets/images/slide__device-screen-1.png"
import DeviceScreen2 from "../assets/images/slide__device-screen-2.png"
import DeviceScreen3 from "../assets/images/slide__device-screen-3.png"
import DeviceScreen4 from "../assets/images/slide__device-screen-4.png"
import FeatureAndroid1 from "../assets/images/feature__android-1.png"
import FeatureAndroid2 from "../assets/images/feature__android-2.png"
import FeatureAndroid3 from "../assets/images/feature__android-3.png"
import FeatureAndroid4 from "../assets/images/feature__android-4.png"
import Icon1 from "../assets/images/icon1_visual_puzzles.png"
import Icon2 from "../assets/images/icon2_industry_standard.png"
import Icon3 from "../assets/images/icon3_feedback.png"
import Icon4 from "../assets/images/icon4_achievements.png"

const FeedbackCard = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const rows = [
    {icon:Icon1, src:DeviceScreen1, srcAndroid:FeatureAndroid1, content: "Visual puzzles develop your problem-solving skills and solidify coding concepts."},
    {icon:Icon2, src:DeviceScreen2, srcAndroid:FeatureAndroid2, content: "Use industry-standard JavaScript with just a few taps on your phone."},
    {icon:Icon3, src:DeviceScreen3, srcAndroid:FeatureAndroid3, content: "Real-time feedback guides you like a teacher."},
    {icon:Icon4, src:DeviceScreen4, srcAndroid:FeatureAndroid4, content: "Collect achievements as you learn new skills."},
  ];
  useEffect(() => {
    setTimeout(() => {
      setCurrentActive((currentActive + 1) % 4);
    }, 2000);
  }, [currentActive]);
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="flex flex-col sm:hidden">
        {rows.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col justify-center items-center text-center mb-10">
                <img className="w-[50px] h-[50px]" src={item.icon} alt="" />
                <div className="text-[18px] leading-[24px] mt-[15px] text-tx-content font-medium max-w-[300px]">
                  {item.content}
                </div>
              </div>
              <div className="max-w-[260px] m-auto mb-20">
                <img src={item.srcAndroid} alt="device_screen1" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-20 hidden sm:flex mb-20">
        <div className="flex flex-col justify-center flex-[1_0_0] relative">
          <img className="w-[50px] h-[50px]" src={rows[currentActive].icon} alt="" />
          <div className="text-[28px] leading-[30px] text-tx-content mt-[15px] font-medium">
            {rows[currentActive].content}
          </div>
          <div className="mt-[50px]">
            <ul className="flex flex-row">
              <li className={`flex w-[14px] h-[14px] rounded-[14px] mr-[14px] cursor-pointer ${currentActive === 0 ? 'bg-tx-content' : 'bg-tx-header'}`} onClick={()=>setCurrentActive(0)}></li>
              <li className={`flex w-[14px] h-[14px] rounded-[14px] mr-[14px] cursor-pointer ${currentActive === 1 ? 'bg-tx-content' : 'bg-tx-header'}`} onClick={()=>setCurrentActive(1)}></li>
              <li className={`flex w-[14px] h-[14px] rounded-[14px] mr-[14px] cursor-pointer ${currentActive === 2 ? 'bg-tx-content' : 'bg-tx-header'}`} onClick={()=>setCurrentActive(2)}></li>
              <li className={`flex w-[14px] h-[14px] rounded-[14px] mr-[14px] cursor-pointer ${currentActive === 3 ? 'bg-tx-content' : 'bg-tx-header'}`} onClick={()=>setCurrentActive(3)}></li>
            </ul>
          </div>
        </div>
        <div className="relative left-[80px] flex flex-[1_0_0] h-[calc(423.81944px_+_426.18056_*_(100vw_-_718px)_/_722)] xl:h-auto xl:w-auto">
          <div className="w-full h-full">
            <div className="h-[calc(485px_+_341_*_(100vw_-_718px)_/_722)] w-[calc(359px_+_252_*_(100vw_-_718px)_/_722)]  xl:h-auto xl:w-auto">
              <img src={rows[currentActive].src} alt="device_screen1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard