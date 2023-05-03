import Quotes from '../assets/svg/quotes.svg'

const StoryCard = (props) => {
  return (
    <div className="m-auto max-w-[342px] h-[390px] flex-col sm:max-w-none sm:w-[720px] sm:h-[350px] p-[30px] sm:p-[50px] flex sm:flex-row border rounded-md border-gray shadow-md">
      <div className="mb-0 mr-12 sm:mb-10 flex justify-end flex-initial">
        <img className="h-[70px] w-[70px] max-w-none sm:w-[120px] sm:h-[120px]" src={props.userSrc} alt="user avatar" />
      </div>
      <div className="flex flex-col">
        <img className="w-[27px] h-[24px] mb-[15px]" src={Quotes} alt="quotes" />
        <div className="text-lg sm:text-2xl text-tx-content mb-5">{props.content}</div>
        <div className="text-2xl text-tx-content font-bold">{props.userName}</div>
      </div>
    </div>
  )
}

export default StoryCard