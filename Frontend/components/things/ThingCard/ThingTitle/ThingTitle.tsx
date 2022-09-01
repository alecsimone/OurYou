import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import THING_TITLE_QUERY from './titleQuery';

interface ThingTitleProps {
  thingID: string;
}

const ThingTitle = ({ thingID }: ThingTitleProps): JSX.Element => {
  const { data, loading, error } = useQuery(THING_TITLE_QUERY, {
    variables: {
      id: thingID,
    },
  });

  if (data) {
    return <div>{data.thing.title}</div>;
  }

  if (loading) {
    return <div>Loading Title...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>Unknown Title Error</div>;
};

export default ThingTitle;
