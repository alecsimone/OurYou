interface ColorSelectorProps {
  thingID: string;
}

const ColorSelector = ({ thingID }: ColorSelectorProps): JSX.Element => {
  console.log('ColorSelector');
  return <div>ColorSelector for {thingID}</div>;
};

export default ColorSelector;
