import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../public/img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../components/collectionPage/collectionIndex";
import Filter from "../components/Filter/Filter";

const collection = () => {
  const collectionArray = [
    {
      image: "img/nft-image-1.png",
    },
    {
      image: "img/nft-image-2.png",
    },
    {
      image: "img/nft-image-3.png",
    },
    {
      image: "img/nft-image-1.png",
    },
    {
      image: "img/nft-image-2.png",
    },
    {
      image: "img/nft-image-3.png",
    },
    {
      image: "img/nft-image-1.png",
    },
    {
      image: "img/nft-image-2.png",
    },
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />

    </div>
  );
};

export default collection;
