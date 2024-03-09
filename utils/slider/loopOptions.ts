export default function loopOptions(width: number) {
  return {
    loop: true,
    height: width / 2,
    autoPlay: true,
    scrollAnimationDuration: 2000,
    autoPlayInterval: 3000,
    width,
  };
}
