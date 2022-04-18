import CollectionCard from "../CollectionCard";
import axios from "axios";
import { useEffect, useState } from "react";

const NFTSection = () => {
  const [splashList, setSplashList] = useState([]);

  useEffect(() => {
    const getMyNft = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x1F7306EfBdC66f4Ce1386847C862A5067F3951Cb&order_direction=asc"
      );
      const allnfts = openseaData.data.assets;
      console.log(allnfts);
      setSplashList(allnfts);
    };

    getMyNft();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 my-20">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-medium">
            Find out from works <br /> that are often trending
          </h1>
          <button className="text-purple-700">See all</button>
        </div>

        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {splashList &&
            splashList.map((index) => (
              <CollectionCard
                key={index.token_id}
                img={index.image_url}
                title={index.name}
                price={index.traits[0].value}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default NFTSection;
