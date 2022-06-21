import { ChangeEventHandler } from 'react';
import MediaUploadPreview from './MediaUploadPreview';
import StyledFileUploadInput from './StyledFileUploadInput';

interface FileUploadInputProps {
  labelText: string;
  name: string;
  files: File[] | null;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  removeFile: (index: number) => void;
  uploadingIndex: number;
}

const FileUploadInput = ({
  labelText,
  name,
  files,
  handleChange,
  removeFile,
  uploadingIndex,
}: FileUploadInputProps): JSX.Element => {
  const filePreviews = [];
  if (files != null) {
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      const remove = () => removeFile(index);
      if (file != null) {
        filePreviews.push(
          <MediaUploadPreview
            key={file.name}
            file={file}
            removeFile={remove}
            uploading={uploadingIndex === index}
            uploaded={uploadingIndex > index}
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
