import { HeroVideoDialog } from "./ui/hero-video-dialog";

export const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center px-8 md:px-0 -mt-8">
      <div className="w-full max-w-5xl rounded-2xl ring-6 md:ring-8 ring-offset-6 ring-offset-indigo-50 ring-indigo-800/60">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <HeroVideoDialog
            videoSrc="https://fast.wistia.net/embed/iframe/2xc3hils18?autoplay=1"
            thumbnailSrc="/hero_thumbnail.png"
            thumbnailAlt="Hero Video Thumbnail"
            className="absolute inset-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
