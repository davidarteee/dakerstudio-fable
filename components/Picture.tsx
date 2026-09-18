import { images, type ImageKey } from "@/lib/images.generated";

type Props = {
  image: ImageKey;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** <img> responsiu a partir de les variants generades per scripts/images.mjs (WebP, width/height fixos → sense CLS). */
export function Picture({ image, alt, sizes, priority = false, className }: Props) {
  const img = images[image];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- exportació estàtica sense servidor d'imatges: variants WebP pregenerades
    <img
      src={img.src}
      srcSet={img.srcSet}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={className}
    />
  );
}
