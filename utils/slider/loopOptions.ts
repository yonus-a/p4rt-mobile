export default function loopOptions(width: number) {
  return {
    loop: true,
    height: width / 2,
    autoPlay: true,
    scrollAnimationDuration: 1000,
    width,
  };
}