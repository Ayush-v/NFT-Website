import Image from "next/image";

const CollectionCard = ({ img, title, price }) => {
  return (
    <>
      <div className="my-16 bg-white text-black rounded-xl">
        <div className="p-1">
          <Image
            src={img}
            width={200}
            height={200}
            alt="nft"
            className="rounded-xl"
          />
        </div>

        <div className="px-2">
          <h1 className="text-xl font-semibold">{title}</h1>
          <div className="flex gap-1 items-center mb-3">
            <p className="opacity-70">Current Bid:</p>
            <div className="flex items-center">
              <h1 className="font-bold">{price} ETH</h1>
              <Image src="/eth-logo.png" alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
