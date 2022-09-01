import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import THING_CONTENT_QUERY from './contentQuery';

interface ContentSectionProps {
  thingID: string;
}

const ContentSection = ({ thingID }: ContentSectionProps): JSX.Element => {
  const { data, loading, error } = useQuery(THING_CONTENT_QUERY, {
    variables: {
      id: thingID,
    },
  });

  if (data) {
    return <div>{data.thing.content.map((piece) => piece.content)}</div>;
  }

  if (loading) {
    return <div>Loading Content...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>Unknown Content Error</div>;
};

export default ContentSection;
