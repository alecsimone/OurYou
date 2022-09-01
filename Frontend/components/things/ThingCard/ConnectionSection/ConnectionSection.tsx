import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import THING_CONNECTION_QUERY from './connectionQuery';

interface ConnectionSectionProps {
  thingID: string;
}

const ConnectionSection = ({
  thingID,
}: ConnectionSectionProps): JSX.Element => {
  const { data, loading, error } = useQuery(THING_CONNECTION_QUERY, {
    variables: {
      id: thingID,
    },
  });

  if (data) {
    return (
      <div>
        <div>
          <h4>Subject Connections</h4>
          {data.thing.subjectConnections.map(
            (connection) => connection.relationship
          )}
        </div>
        <div>
          <h4>Object Connections</h4>
          {data.thing.objectConnections.map(
            (connection) => connection.relationship
          )}
        </div>
      </div>
    );
  }

  if (loading) {
    return <div>Loading Connections...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>Unknown Connections Error</div>;
};

export default ConnectionSection;
