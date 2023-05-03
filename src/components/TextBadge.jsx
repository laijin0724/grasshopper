const TextBadge = (props) => {
  return (
    <div className=" w-60 h-16 text-lg rounded-[35.5px] bg-bg-text text-tx-content flex justify-center items-center font-medium">
      {props.content}
    </div>
  )
}

export default TextBadge