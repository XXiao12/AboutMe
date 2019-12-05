import forEach from "lodash/forEach";

function preloadImg(imgs) {
  forEach(imgs, url => {
    const i = new Image();
    i.src = url;
  });
}

export default preloadImg;
