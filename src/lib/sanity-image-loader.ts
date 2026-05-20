type LoaderArgs = { src: string; width: number; quality?: number };

const SANITY_HOST = "cdn.sanity.io";

export default function sanityImageLoader({ src, width, quality }: LoaderArgs) {
  if (!src.includes(SANITY_HOST)) return src;

  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 85));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.toString();
}
