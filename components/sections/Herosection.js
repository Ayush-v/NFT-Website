import Image from "next/image";

const Herosection = () => {
  return (
    <div className="py-20 mx-auto max-w-7xl px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-2">
        <div className="md:w-1/2 flex flex-col gap-5 items-start">
          <h1 className="text-5xl md:text-6xl md:leading-[81px]">
            Discover unique and incredible rare digital art
          </h1>
          <p className="text-gray-400 md:text-lg">
            Every art is something amazing, find it and collect it into NFT for
            you. be the only owner for a good work
          </p>
          <div className="mt-2 bg-gradient-to-r from-[#3913B8] to-[#64FFDA] rounded-xl p-[1px]">
            <button className="px-11 py-3 text-lg rounded-xl bg-[#0C0D11] border-[1px] border-solid border-[#0C0D11]">
              Get it Now
            </button>
          </div>
        </div>
        <div className="flex relative">
          <Image src="/imgall.png" alt="" width={504} height={581} />
          <div className="absolute bottom-10 -left-10 -z-10">
            <Image
              src="/dots.png"
              alt=""
              width={127}
              height={127}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute w-[500px] h-[500px] -left-[200px] top-[170px] -z-10 hidden">
        <Image
          src="/ellipse2.svg"
          alt="imf"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Herosection;
