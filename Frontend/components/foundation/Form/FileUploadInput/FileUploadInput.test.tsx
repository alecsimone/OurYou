/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FileUploadInput.stories';

const {
  Basic,
  WithFile,
  UploadingFile,
  FileUploaded,
  WithMultipleFiles,
  UploadingMultipleFiles,
  MultipleFilesUploaded,
} = composeStories(stories);

describe('FileUploadInput', () => {
  window.URL.createObjectURL = () => 'test.jpg';

  it('Displays an upload button with no visible input', () => {
    const { container } = render(<Basic {...Basic.args} />);

    const button = screen.getByText('Upload');
    expect(button).toBeInTheDocument();

    const input = container.querySelector('input');
    expect(input).not.toBeVisible();
  });

  it('Shows a preview and metadata for any files staged for upload', () => {
    render(<WithFile {...WithFile.args} />);

    const thumb = screen.getByAltText('media upload');
    expect(thumb).toBeInTheDocument();

    const fileName = screen.getByText('test-1.jpg');
    expect(fileName).toBeInTheDocument();

    const fileSize = screen.getByText('32B');
    expect(fileSize).toBeInTheDocument();

    const removeButton = screen.getByTitle('RemoveMedia');
    expect(removeButton).toBeInTheDocument();
  });

  it("Lets the user know when it's uploading a file", () => {
    render(<UploadingFile {...UploadingFile.args} />);
    const fileMeta = screen.getByText('32B: Uploading...');
    expect(fileMeta).toBeInTheDocument();
  });

  it("Lets the user know when it's finished uploading a file", () => {
    render(<FileUploaded {...FileUploaded.args} />);
    const fileMeta = screen.getByText('32B: Uploaded');
    expect(fileMeta).toBeInTheDocument();
  });

  it('Shows a preview and metadata for all files staged for upload when multiple files have been staged', () => {
    render(<WithMultipleFiles {...WithMultipleFiles.args} />);

    const thumb = screen.getAllByAltText('media upload');
    expect(thumb).toHaveLength(3);

    const fileNameOne = screen.getByText('test-1.jpg');
    expect(fileNameOne).toBeInTheDocument();

    const fileNameTwo = screen.getByText('test-2.jpg');
    expect(fileNameTwo).toBeInTheDocument();

    const fileNameThree = screen.getByText('test-3.jpg');
    expect(fileNameThree).toBeInTheDocument();

    const fileSize = screen.getAllByText('32B');
    expect(fileSize).toHaveLength(3);
  });

  it('Lets the user know which file is uploading and which files have been uploaded', () => {
    render(<UploadingMultipleFiles {...UploadingMultipleFiles.args} />);
    const uploadedFileMeta = screen.getByText('32B: Uploaded');
    expect(uploadedFileMeta).toBeInTheDocument();

    const uploadingFileMeta = screen.getByText('32B: Uploading...');
    expect(uploadingFileMeta).toBeInTheDocument();

    const nextFileMeta = screen.getByText('32B');
    expect(nextFileMeta).toBeInTheDocument();
  });

  it('Lets the user know when all files have been uploaded', () => {
    render(<MultipleFilesUploaded {...MultipleFilesUploaded.args} />);
    const uploadedFileMeta = screen.getAllByText('32B: Uploaded');
    expect(uploadedFileMeta).toHaveLength(3);
  });
});
