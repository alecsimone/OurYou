interface CommentSectionProps {
  thingID: string;
}

const CommentSection = ({ thingID }: CommentSectionProps): JSX.Element => {
  console.log('CommentSection');
  return <div>CommentSection for {thingID}</div>;
};

export default CommentSection;
