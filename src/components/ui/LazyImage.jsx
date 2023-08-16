import React from "react";

// Import Packeges:
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function LazyImage({
  src,
  alt,
  width,
  height,
  sizes,
  layout,
  property,
  loading,
  quality,
  objectFit,
  fill,
  className
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          sizes={sizes}
          objectFit={objectFit}
          layout={layout}
          property={property}
          loading={loading}
          fill={fill}
          className={className}
        />
      )}
    </div>
  );
}

export default LazyImage;
