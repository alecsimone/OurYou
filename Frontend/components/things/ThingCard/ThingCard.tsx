import ColorSelector from './ColorSelector';
import CommentSection from './CommentSection';
import ConnectionSection from './ConnectionSection';
import ContentSection from './ContentSection';
import FeaturedImage from './FeaturedImage';
import PrivacySelector from './PrivacySelector';
import StyledThingCard from './StyledThingCard';
import TagSection from './TagSection';
import ThingTitle from './ThingTitle';

interface ThingCardProps {
  id: string;
}

const ThingCard = ({ id }: ThingCardProps): JSX.Element => {
  console.log('ThingCard');

  return (
    <StyledThingCard>
      <ThingTitle thingID={id} />
      <PrivacySelector thingID={id} />
      <ColorSelector thingID={id} />
      <FeaturedImage thingID={id} />
      <TagSection thingID={id} />
      <ContentSection thingID={id} />
      <ConnectionSection thingID={id} />
      <CommentSection thingID={id} />
    </StyledThingCard>
  );
};

export default ThingCard;
