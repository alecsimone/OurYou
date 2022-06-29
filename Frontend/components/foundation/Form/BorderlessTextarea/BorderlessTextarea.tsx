import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import dynamicallyResizeElement from 'utils/dynamicallyResizeElement';
import StyledBorderlessTextarea from './StyledBorderlessTextarea';

interface BorderlessTextareaProps {
  text: string;
  updateText: (newText: string) => void;
}

const BorderlessTextarea = ({
  text,
  updateText,
}: BorderlessTextareaProps): JSX.Element => {
  const [editedText, setEditedText] = useState(text);

  const elementRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (elementRef.current == null) return;

    dynamicallyResizeElement(elementRef.current, false);
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (elementRef.current) {
        elementRef.current.blur();
      }
    }
  };

  return (
    <StyledBorderlessTextarea
      ref={elementRef}
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      onKeyDown={handleKeyDown}
      onBlur={() => updateText(editedText)}
    />
  );
};

export default BorderlessTextarea;
