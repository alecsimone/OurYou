import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import THING_COLOR_QUERY from './colorQuery';

interface ColorSelectorProps {
  thingID: string;
}

const ColorSelector = ({ thingID }: ColorSelectorProps): JSX.Element => {
  const { data, loading, error } = useQuery(THING_COLOR_QUERY, {
    variables: {
      id: thingID,
    },
  });

  if (data) {
    return <div>{data.thing.color}</div>;
  }

  if (loading) {
    return <div>Loading Color...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>Unknown Color Error</div>;
};

export default ColorSelector;
