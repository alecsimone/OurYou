import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import THING_TAG_QUERY from './tagQuery';

interface TagSectionProps {
  thingID: string;
}

const TagSection = ({ thingID }: TagSectionProps): JSX.Element => {
  const { data, loading, error } = useQuery(THING_TAG_QUERY, {
    variables: {
      id: thingID,
    },
  });

  if (data) {
    return <div>{data.thing.partOfTags.map((tag) => tag.title)}</div>;
  }

  if (loading) {
    return <div>Loading Tags...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>Unknown Tag Error</div>;
};

export default TagSection;
