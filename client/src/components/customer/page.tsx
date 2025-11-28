export default function Customer() {
  return (
    <div className="py-20 mx-auto bg-amber-100 max-w-6xl">
      <div className=" grid mx-auto px-6 md:grid-cols-2 gap-12 items-center ">
        <div className="h-[240px] bg-white  rounded-md justify items-center text-center p-3 shadow-md">
          {" "}
          <h1 className="text-[30px] text-amber-700 font-bold underline p-2 ">
            100th customer offer
          </h1>
          <p className="text-[17px] text-gray-700 mt-4 text-justify ">
            Get a free coffee on us! Be our 100th customer and enjoy a
            complimentary beverage of your choice as a token of our
            appreciation.
          </p>
        </div>
        <div>
          <h1 className="text-center text-amber-900 font-bold text-[40px]">
            EspressoYourself
          </h1>
        </div>
      </div>
    </div>
  );
}
