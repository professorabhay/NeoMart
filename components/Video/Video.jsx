import React from "react";
import Image from "next/image";

//INTERNALIMPORT
import Style from "./Video.module.css";
import images from "../../public/img";

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          NeoBazar: Powered by Neo X
        </h1>
        

        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <Image
              src={images.NFTVideo}
              alt="Video image"
              width={1920}
              height={1080}
              objectFit="cover"
              className={Style.Video_box_frame_left_img}
              priority
            />
          </div>

          <div className={Style.Video_box_frame_right}>Hey</div>
        </div>
      </div>
    </div>
  );
};

export default Video;