import { useEffect, useRef, useState, KeyboardEventHandler } from 'react';
import Input from '@styles/extendableElements/Input';
import dynamicallyResizeElement from 'utils/dynamicallyResizeElement';

interface AutoSizedTextInputProps {
  text: string;
  updateText: (newText: string) => void;
}

const AutoSizedTextInput = ({
  text,
  updateText,
}: AutoSizedTextInputProps): JSX.Element => {
  const [editedText, setEditedText] = useState(text);

  const elementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (elementRef.current == null) return;

    dynamicallyResizeElement(elementRef.current);
  });

  useEffect(() => {
    setEditedText(text);
  }, [text]);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && elementRef.current) {
      updateText(elementRef.current.value);
    }
  };

  return (
    <Input
      ref={elementRef}
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default AutoSizedTextInput;
