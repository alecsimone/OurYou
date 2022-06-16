import formatFileSize from 'utils/formatFileSize';
import StyledMediaUploadPreview from './StyledMediaUploadPreview';

interface MediaUploadPreviewProps {
  file: File;
}

const MediaUploadPreview = ({ file }: MediaUploadPreviewProps): JSX.Element => {
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
          {/* {currentlyUploadingIndex === index && ': Uploading...'}
          {currentlyUploadingIndex !== -1 &&
            currentlyUploadingIndex > index &&
            ': Uploaded'} */}
        </div>
      </div>
      {/* {!loading && (
        <X
          className="removeFile"
          onClick={() => removeFile(index)}
        />
      )} */}
    </StyledMediaUploadPreview>
  );
};

export default MediaUploadPreview;
