import Carousel from "@/components/carousel/Carousel";
import HomeSections from "@/components/sections/HomeSections";

const HomePage = () => {
  return (
    <div className="">
      <Carousel heightClass="h-[22rem] md:h-[352px]" />
      <div className="">
        <HomeSections />
      </div>
    </div>
  )
}

export default HomePage
