export default function twoSecondTmer() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
