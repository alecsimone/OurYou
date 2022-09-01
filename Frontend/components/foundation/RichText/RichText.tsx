interface RichTextProps {
  text: string;
}

const RichText = ({ text }: RichTextProps): JSX.Element => {
  console.log('RichText');
  return <div>{text}</div>;
};

export default RichText;
