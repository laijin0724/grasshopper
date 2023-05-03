const Footer = () => {
  return (
    <footer className="bg-bg-section text-base text-[white]">
      <div className="px-[20px] py-[66px] sm:px-[40px] sm:py-[50px] flex-wrap sm:flex-none flex flex-row justify-start sm:justify-evenly">
        <div className="flex flex-col w-2/4 sm:w-auto order-1 sm:-order-none ">
          <div className="cursor-pointer mb-5 sm:mb-[5px]">Home</div>
          <div className="cursor-pointer mb-5 sm:mb-0">What is coding</div>
        </div>
        <div className="cursor-pointer w-2/4 sm:w-auto order-3 sm:-order-none">
          Email us
        </div>
        <div className="flex flex-col w-2/4 sm:w-auto text-right order-2 sm:-order-none sm:text-left">
          <div className="cursor-pointer mb-5 sm:mb-[5px]">
            Terms of service
          </div>
          <div className="cursor-pointer">Privacy policy</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;