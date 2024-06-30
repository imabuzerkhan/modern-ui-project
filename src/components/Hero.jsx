import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";


const Hero = () => {
  return (
    <>
    <div className="pt-4 lg:10 " >
      <div className="px-[20px] lg:[280px] " >
        <h1 className="text-[#172026] text-center text-[26px] leading-[40px] font-medium lg:text-[64px] lg:leading-[72px] " >          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7" >
        Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlurArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Hero
