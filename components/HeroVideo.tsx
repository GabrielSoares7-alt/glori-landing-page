import AutoplayVideo from "./AutoplayVideo";

export default function HeroVideo() {
  return (
    <AutoplayVideo
      webm="/assets/videos/hero-video.webm"
      mp4="/assets/videos/hero-video.mp4"
      poster="/assets/videos/hero-poster.jpg"
      eager
    />
  );
}
