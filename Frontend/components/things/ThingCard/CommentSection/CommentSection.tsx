import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import THING_COMMENT_QUERY from './commentQuery';

interface CommentSectionProps {
  thingID: string;
}

const CommentSection = ({ thingID }: CommentSectionProps): JSX.Element => {
  const { data, loading, error } = useQuery(THING_COMMENT_QUERY, {
    variables: {
      id: thingID,
    },
  });

  if (data) {
    return (
      <div>
        <h4>Comments</h4>
        {data.thing.comments.map((comment) => comment.comment)}
      </div>
    );
  }

  if (loading) {
    return <div>Loading Comment...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>Unknown Comment Error</div>;
};

export default CommentSection;
