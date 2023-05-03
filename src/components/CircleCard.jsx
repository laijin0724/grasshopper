const CircleCard = (props) => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center text-center">
      <div className="mb-10"><img src={props.src} alt="adventure" /></div>
      <div className="text-2xl text-tx-content max-w-[460px]">{props.content}</div>
    </div>
  )
}

export default CircleCard;