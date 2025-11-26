export default function Customer() {
  return (
    <div className="py-20 mx-auto bg-amber-100 max-w-6xl">
      <div className=" grid mx-auto px-6 md:grid-cols-2 gap-12 items-center ">
        <div className="h-[240px] bg-white  rounded-md justify items-center text-center p-2 shadow-md">
          {" "}
          <h1 className="text-[30px] text-amber-700 semi-bold ">
            100th customer offer
          </h1>
          <p className="text-[20px] text-gray-700 mt-4 text-justify leading-relaxed">
            Get a free coffee on us! Be our 100th customer and enjoy a
            complimentary beverage of your choice as a token of our
            appreciation.
          </p>
        </div>
        <div>harry</div>
      </div>
    </div>
  );
}
