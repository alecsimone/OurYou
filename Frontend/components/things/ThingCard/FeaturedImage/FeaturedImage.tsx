import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import THING_FEATURED_IMAGE_QUERY from './featuredImageQuery';

interface FeaturedImageProps {
  thingID: string;
}

const FeaturedImage = ({ thingID }: FeaturedImageProps): JSX.Element => {
  const { data, loading, error } = useQuery(THING_FEATURED_IMAGE_QUERY, {
    variables: {
      id: thingID,
    },
  });

  if (data) {
    return <div>{data.thing.featuredImage}</div>;
  }

  if (loading) {
    return <div>Loading Featured Image...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>Unknown Featured Image Error</div>;
};

export default FeaturedImage;
