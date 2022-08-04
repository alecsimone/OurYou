interface FeaturedImageProps {
  thingID: string;
}

const FeaturedImage = ({ thingID }: FeaturedImageProps): JSX.Element => {
  console.log('FeaturedImage');
  return <div>FeaturedImage for {thingID}</div>;
};

export default FeaturedImage;
