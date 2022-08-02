import { gql } from '@apollo/client';
import fullThingFields from 'utils/fieldLists/fullThingFields';

const THING_QUERY = gql`
  query THING_QUERY($id: ID) {
    thing(where: {id: $id}) {
      ${fullThingFields}
    }
  }
`;

export default THING_QUERY;
