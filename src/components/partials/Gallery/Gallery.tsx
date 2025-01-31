"use client";

import { GalleryImage } from "@/interfaces";
import Image from "next/image";
import Masonry from "react-masonry-css";
import styles from "./Gallery.module.css";

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery = ({ images }: GalleryProps) => {
  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    768: 2,
    640: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {images.map((image) => (
        <div key={image.id} className={styles.masonryItem}>
          <Image
            src={image.src}
            alt={image.alt}
            width={1080}
            height={1080}
            className={styles.masonryImage}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
