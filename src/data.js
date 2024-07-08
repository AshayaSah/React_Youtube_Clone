export const API_KEY = "AIzaSyALfGaprc9d3JsVDmsue7AOqi0BTPvNy6c";

export const viewsConverter = (views) => {
  if (views >= 1000000) {
    return Math.floor(views / 1000000) + "M";
  } else if (views >= 1000) {
    return Math.floor(views / 1000) + "K";
  } else {
    return views;
  }
};
