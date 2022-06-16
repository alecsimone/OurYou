const isImage = (url: string) => {
  if (url == null) return false;
  const lowerCasedURL = url.toLowerCase();
  if (
    lowerCasedURL.includes('.jpg') ||
    lowerCasedURL.includes('.jpeg') ||
    lowerCasedURL.includes('.gif') ||
    lowerCasedURL.includes('.png') ||
    lowerCasedURL.includes('.webp')
  ) {
    return true;
  }
  return false;
};
export default isImage;
