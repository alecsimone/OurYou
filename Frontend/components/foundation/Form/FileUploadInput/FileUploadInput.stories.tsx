/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileUploadInput, { FileUploadInputProps } from './FileUploadInput';

export default {
  title: 'Foundation/Form/File Upload Input',
  component: FileUploadInput,
} as ComponentMeta<typeof FileUploadInput>;

const Template: ComponentStory<typeof FileUploadInput> = (args) => (
  <FileUploadInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  labelText: 'Upload',
  name: 'upload',
  files: [],
  handleChange: () => {},
  removeFile: () => {},
  uploadingIndex: -1,
};

const fileNameOne = 'test-1.jpg';
const strOne = JSON.stringify({
  name: fileNameOne,
  size: 100,
});
const blobOne = new Blob([strOne]);
const fileOne = new File([blobOne], fileNameOne, {
  type: 'image/jpg',
});

const fileNameTwo = 'test-1.jpg';
const strTwo = JSON.stringify({
  name: fileNameTwo,
  size: 100,
});
const blobTwo = new Blob([strTwo]);
const fileTwo = new File([blobTwo], fileNameTwo, {
  type: 'image/jpg',
});

const fileNameThree = 'test-1.jpg';
const strThree = JSON.stringify({
  name: fileNameOne,
  size: 100,
});
const blobThree = new Blob([strThree]);
const fileThree = new File([blobThree], fileNameThree, {
  type: 'image/jpg',
});

export const WithFile = Template.bind({});
const WithFileArgs: FileUploadInputProps = {
  labelText: 'Upload',
  name: 'upload',
  files: [fileOne],
  handleChange: () => {},
  removeFile: () => {},
  uploadingIndex: -1,
};
WithFile.args = WithFileArgs;

export const UploadingFile = Template.bind({});
UploadingFile.args = {
  labelText: 'Upload',
  name: 'upload',
  files: [fileOne],
  handleChange: () => {},
  removeFile: () => {},
  uploadingIndex: 0,
};

export const FileUploaded = Template.bind({});
FileUploaded.args = {
  labelText: 'Upload',
  name: 'upload',
  files: [fileOne],
  handleChange: () => {},
  removeFile: () => {},
  uploadingIndex: 1,
};

export const WithMultipleFiles = Template.bind({});
WithMultipleFiles.args = {
  labelText: 'Upload',
  name: 'upload',
  files: [fileOne, fileTwo, fileThree],
  handleChange: () => {},
  removeFile: () => {},
  uploadingIndex: -1,
};

export const UploadingMultipleFiles = Template.bind({});
UploadingMultipleFiles.args = {
  labelText: 'Upload',
  name: 'upload',
  files: [fileOne, fileTwo, fileThree],
  handleChange: () => {},
  removeFile: () => {},
  uploadingIndex: 1,
};

export const MultipleFilesUploaded = Template.bind({});
MultipleFilesUploaded.args = {
  labelText: 'Upload',
  name: 'upload',
  files: [fileOne, fileTwo, fileThree],
  handleChange: () => {},
  removeFile: () => {},
  uploadingIndex: 3,
};
