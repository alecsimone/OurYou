import FunctionalIcon from '@icons/FunctionalIcon';
import X from '@icons/X';
import formatFileSize from 'utils/formatFileSize';
import StyledMediaUploadPreview from './StyledMediaUploadPreview';

interface MediaUploadPreviewProps {
  file: File;
  removeFile: () => void;
  uploading?: boolean;
  uploaded?: boolean;
}

const MediaUploadPreview = ({
  file,
  removeFile,
  uploading = false,
  uploaded = false,
}: MediaUploadPreviewProps): JSX.Element => {
  const { name: fileName, size: fileSize, type: fileType } = file;
  let thumb;
  if (fileType.includes('image')) {
    const url = URL.createObjectURL(file);
    thumb = (
      <img
        alt="media upload"
        src={url}
      />
    );
  }

  return (
    <StyledMediaUploadPreview className="mediaPreview">
      <div className="thumb">{thumb}</div>
      <div className="mediaMeta">
        <div className="fileName">{fileName}</div>
        <div className="fileSize">
          {formatFileSize(fileSize)}
          {uploading && ': Uploading...'}
          {uploaded && ': Uploaded'}
        </div>
      </div>
      <FunctionalIcon
        iconName="removeMedia"
        onTrigger={removeFile}
      >
        <X />
      </FunctionalIcon>
    </StyledMediaUploadPreview>
  );
};

export default MediaUploadPreview;
