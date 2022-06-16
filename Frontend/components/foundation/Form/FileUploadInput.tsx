import { ChangeEventHandler } from 'react';
import MediaUploadPreview from './MediaUploadPreview';
import StyledFileUploadInput from './StyledFileUploadInput';

interface FileUploadInputProps {
  labelText: string;
  name: string;
  files: File[] | null;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const FileUploadInput = ({
  labelText,
  name,
  files,
  handleChange,
}: FileUploadInputProps): JSX.Element => {
  const filePreviews = [];
  if (files != null) {
    for (const file of files) {
      if (file != null) {
        filePreviews.push(
          <MediaUploadPreview
            key={file.name}
            file={file}
          />
        );
      }
    }
  }

  return (
    <StyledFileUploadInput>
      {filePreviews}
      <label>
        {labelText}
        <input
          type="file"
          name={name}
          onChange={handleChange}
        />
      </label>
    </StyledFileUploadInput>
  );
};

export default FileUploadInput;
