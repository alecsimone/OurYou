import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import THING_PRIVACY_QUERY from './privacyQuery';

interface PrivacySelectorProps {
  thingID: string;
}

const PrivacySelector = ({ thingID }: PrivacySelectorProps): JSX.Element => {
  const { data, loading, error } = useQuery(THING_PRIVACY_QUERY, {
    variables: {
      id: thingID,
    },
  });

  if (data) {
    return <div>{data.thing.privacy}</div>;
  }

  if (loading) {
    return <div>Loading Privacy...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>Unknown Privacy Error</div>;
};

export default PrivacySelector;
