interface PrivacySelectorProps {
  thingID: string;
}

const PrivacySelector = ({ thingID }: PrivacySelectorProps): JSX.Element => {
  console.log('PrivacySelector');
  return <div>PrivacySelector for {thingID}</div>;
};

export default PrivacySelector;
