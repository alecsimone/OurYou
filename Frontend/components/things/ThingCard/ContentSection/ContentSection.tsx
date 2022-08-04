interface ContentSectionProps {
  thingID: string;
}

const ContentSection = ({ thingID }: ContentSectionProps): JSX.Element => {
  console.log('ContentSection');
  return <div>ContentSection for {thingID}</div>;
};

export default ContentSection;
