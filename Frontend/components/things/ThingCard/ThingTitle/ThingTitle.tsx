interface ThingTitleProps {
  thingID: string;
}

const ThingTitle = ({ thingID }: ThingTitleProps): JSX.Element => {
  console.log('ThingTitle');
  return <div>ThingTitle for {thingID}</div>;
};

export default ThingTitle;
