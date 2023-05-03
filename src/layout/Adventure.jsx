import CircleCard from "../components/CircleCard";
import AdventureCoding from '../assets/svg/adventure__coding.svg'
import AdventureJourney from '../assets/svg/adventure__journey.svg'
import AdventureWaving from '../assets/svg/adventure__waving.svg'

const Adventure = () => {
  const data = [
    { src: AdventureWaving, content: "Learn with fun, quick lessons on your phone that teach you to write real JavaScript." },
    { src: AdventureCoding, content: "Move through progressively challenging levels as you develop your abilities." },
    { src: AdventureJourney, content: "Graduate with fundamental programming skills for your next step as a coder." },
  ]
  return (
    <div className="bg-bg-adventure">
      <div className="pt-[80px] sm:pt-[30px] pb-[124px] px-10 max-w-[1200px] m-auto">
        <h2 className="text-4xl font-medium text-tx-content text-center mb-[100px]">
          The best way to start your coding adventure.
        </h2>
        <div className="flex flex-col md:flex-row mb-[60px] gap-[30px]">
          {data.map((item, index) => (
            <div key={index}>
              <CircleCard src={item.src} content={item.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Adventure;