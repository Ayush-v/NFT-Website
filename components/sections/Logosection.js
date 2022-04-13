import Image from "next/image";

const Logosection = () => {
  return (
    <div className="flex justify-around flex-wrap gap-10 mx-auto max-w-7xl px-8">
      <div>
        <Image src="/logo1.svg" alt="" width={190} height={70} />
      </div>
      <div>
        <Image src="/logo2.svg" alt="" width={190} height={70} />
      </div>
      <div>
        <Image src="/logo3.svg" alt="" width={190} height={70} />
      </div>
      <div>
        <Image src="/logo4.svg" alt="" width={190} height={70} />
      </div>
    </div>
  );
};

export default Logosection;
