import TextBadge from "../components/TextBadge";

const Language = () => {
  const data = ['Control Flow', 'Functions', 'Variables', 'Object Editing', 'Animation', 'Callbacks', 'Array Methods', 'Operators', 'Recursion', 'String Manipulation', 'Loops', 'and more...'];
  return (
    <div className="p-0 pb-[80px] sm:pt-[124px] sm:pb-[94px] flex flex-col w-full flex-[1_0_0]">
      <h2 className="text-4xl font-medium text-tx-content text-center mb-[60px]">
        Learn concepts that apply to any programming language
      </h2>
      <div className="flex flex-col justify-center items-center gap-3 sm:hidden">
        {data.map((item, index) => (
          <div key={index}>
            <TextBadge content={item} />
          </div>
        ))}
      </div>
      <div className="hidden sm:block">
        <div className="overflow-hidden">
          <div className="flex flex-row justify-center items-center animate-[600ms_linear_0ms_infinite_alternate_both_slideRightQuarter] animationDuration130">
            {data.map((item, index) => (
              <div key={index}>
                <TextBadge content={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-3">
          <div className="flex flex-row justify-center items-center animate-[600ms_linear_0ms_infinite_alternate_both_slideLeftQuarter] animationDuration180 relative left-[100px]">
            {data.map((item, index) => (
              <div key={index}>
                <TextBadge content={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-3">
          <div className="flex flex-row gap-3 justify-center items-center animate-[600ms_linear_0ms_infinite_alternate_both_slideRightQuarter] animationDuration210 relative left-[198px]">
            {data.map((item, index) => (
              <div key={index}>
                <TextBadge content={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Language;