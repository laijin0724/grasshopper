import StoryCard from "../components/StoryCard";
import User1 from '../assets/users/user1.jpg'
import User2 from '../assets/users/user2.jpg'
import User3 from '../assets/users/user3.jpg'
import User4 from '../assets/users/user4.jpg'

const Story = () => {
  return (
    <div className="pt-[94px] pb-[100px]">
      <h2 className="text-4xl font-medium text-tx-content text-center mb-[60px]">
        Grasshopper stories
      </h2>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">

        <div className="relative h-[400px] overflow-hidden rounded-lg md:h-96">

          <div className="hidden duration-700 ease-in-out h-full" data-carousel-item>
            <StoryCard userSrc={User1} content={"Grasshopper showed me that no matter what or who or how I look, anyone can learn how to code. It’s exciting. It opens up a whole new world for me."} userName="Ismael" />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <StoryCard userSrc={User2} content={"I like Grasshopper because it allows anyone with or without experience in coding to jump right in and have fun along the way."} userName="Brianna" />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <StoryCard userSrc={User3} content={"Grasshopper helped me achieve basic understanding of coding. Now, I know that I can see myself in this field."} userName="Zhamal" />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <StoryCard userSrc={User4} content={"This is the most user-friendly interactive app [where] challenges are structured like fill-in-the-blanks puzzles [and] animations and confetti ... demonstrate how code can bring things to life."} userName="Alverson" />
          </div>
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-[-30px] sm:bottom-0 left-1/2 mt-[50px]">
          <button type="button" className="w-3 h-3 rounded-full bg-tx-header hover:bg-bg-section" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-tx-header hover:bg-bg-section" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-tx-header hover:bg-bg-section" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-tx-header hover:bg-bg-section" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        </div>

      </div>
    </div>
  )
}

export default Story;