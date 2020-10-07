export const api = 'http://localhost:3000/';
export const showProductImage = (image) => {
  console.log(image);
  return `http://localhost:3000/public/${image.img}`;
};
