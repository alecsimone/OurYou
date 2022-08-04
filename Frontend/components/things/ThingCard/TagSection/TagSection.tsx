interface TagSectionProps {
  thingID: string;
}

const TagSection = ({ thingID }: TagSectionProps): JSX.Element => {
  console.log('TagSection');
  return <div>TagSection for {thingID}</div>;
};

export default TagSection;
