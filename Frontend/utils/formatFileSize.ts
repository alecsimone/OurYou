const formatFileSize = (size: number) => {
  if (size < 1024) {
    return `${size}B`;
  }
  if (size >= 1024 && size < 1048576) {
    return `${(size / 1024).toFixed(1)}KB`;
  }
  if (size >= 1048576) {
    return `${(size / 1048576).toFixed(1)}MB`;
  }
  return size;
};

export default formatFileSize;
