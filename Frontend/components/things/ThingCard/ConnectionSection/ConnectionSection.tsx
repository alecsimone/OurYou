interface ConnectionSectionProps {
  thingID: string;
}

const ConnectionSection = ({
  thingID,
}: ConnectionSectionProps): JSX.Element => {
  console.log('ConnectionSection');
  return <div>ConnectionSection for {thingID}</div>;
};

export default ConnectionSection;
