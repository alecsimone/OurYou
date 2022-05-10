import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import getComputedColor from '../../styles/functions/getComputedColor';
import { ColorNames } from '../../styles/styled';

interface LogoIconProps {
  color?: ColorNames; // color of the icon, defaults to blue
}

const LogoIcon: FC<LogoIconProps> = ({ color = 'blue' }) => {
  const theme = useContext(ThemeContext);
  const computedColor = theme[color];

  return (
    <path
      d="M77,185.21C32.58,167.16,10.63,117.6,25.76,75.31,42.89,27.46,101.17,6.67,144.93,27.55c35.36,16.87,55.71,58.29,46.65,97.44-11.1,47.93-59.62,63.6-61.66,64.22m1.75.32c42.76-13.54,67.55-56,59.27-95-8.85-41.76-51.81-62.53-86.26-62.3-39.15.26-86.93,27.75-88.18,72-1,34.68,26.87,68.81,67.73,77.48m36.9,4c6.05-.94,56.13-9.38,64.7-40.73,2.16-7.92,1-14.9-.48-21.09-3-12.37-23.85-98.05-80.67-97.44-38.6.41-80.57,40.5-75.72,86.26,3.18,30.09,25.95,56.49,57.83,66.93m47.28,10.23c35.55-14.31,59.53-46.13,60.86-80.67,1.88-48.45-41.16-93.05-92.17-92.5-52.08.57-96,48-90.1,96,4,32.72,30.64,61.29,67.1,72.2M117,183.46c43-8.14,73.32-44.09,73.48-82.91.2-48-45.91-82.47-89-83.39C51.77,16.1,1.45,59.6,7.39,108.22c4.32,35.28,37.41,66.3,81,71.56m-10.22,4.95c-37.2-10.68-63.46-41-66-74.6-3.6-48,42.15-92,91.37-89,47.21,2.88,89.77,48.51,80.19,93-6.69,31.06-37.68,56.29-76.68,59.74M0,0H0M93.5,168.28C54.55,164.76,24.44,137.54,20,106,14,63,57.19,23,101.64,23.71c42.24.66,84.16,38,78.92,80.83-4.07,33.22-35.49,61.77-75.56,63.74m-11.66,8.31c-43.81-3.77-77-36.86-79.56-73.8-3.22-46.46,43-84.37,89-83.71,40.6.58,79.38,31.17,85.3,75.24,5.74,42.63-21.19,83.62-62.94,95.37M94.61,164c-36.29-3.63-63.83-30.4-66.61-60.55-3.65-39.54,36.47-72.26,75.08-72,35.57.2,75.07,28.4,73.48,67.25-1.33,32.49-31,61.91-69.49,63.1M84.55,182.5c-37.15-9.68-62.41-43-61.34-78.92C24.41,63.12,58.9,26.36,101.48,28c40,1.56,71.49,36.4,72.21,75.39.64,35-23.61,67-59.11,76.68m-44.09,8.79C36,172,14.65,137.44,16,101.19c1.66-44.08,36.68-84.07,81.79-87.7,51.7-4.16,99.24,40.84,96.8,91.37-1.82,37.86-31.37,72.22-73,82.11m-30.35-13.9c-36.39-4.82-63.5-33.43-65.34-65.49C23.53,66,64.52,32.13,104,34.73,137.88,37,175,66.21,171,102.47c-3,27.31-28.61,51.44-62.3,54.63M91.74,179C48,176.57,13.79,146.69,9.15,112.53,2.82,65.92,53,22.75,100.84,26c37,2.47,79.75,33.07,77.64,76.2-1.7,34.65-31.82,65.94-72.21,70M92.7,158.7c-31.38-4.21-54.61-28.83-56.07-56.23C34.79,68,68,41.84,99.73,40.33,128.75,39,161.51,58,166.5,89.21,171.57,121,146.3,155.07,108,159.5M86.15,181.7c-6.89-.93-51.24-7.51-67.73-40.42C-4.85,94.87,38.09,17.57,95.57,15.09c40.91-1.77,89.26,34.36,87.86,83.54-1.09,38.36-32.1,73-74.6,79.4m-16.29-.16c-34.91-2.8-63.5-25.48-71.09-55C10.75,81.35,44,34.83,88.7,30.74c36.49-3.34,75.09,22.12,81,62.3,5.7,38.83-21.32,76.47-61.18,83.55m-34,9.58c-10.51-.91-26.39-4.1-39.94-15.49C4.38,145.32-3.23,88.55,28,52.15c27.22-31.73,75.94-38.63,110.22-16.78C182,63.25,187.6,128.61,159.79,160.45c-13.3,15.23-32,20.25-44.09,22.05M90.46,155.66c-1.6-.13-39.72-3.81-51.44-30.83-12.86-29.65,13.19-71,49.2-78.75,31.17-6.74,67.62,12.1,75.24,44.41,7.87,33.3-17.23,71.1-57.34,76.51m-14.54-.8c-29.68-5.36-51-31.87-49.84-61.5C43,73.15,69.19,49.28,98.13,47.19c26.4-1.9,56.21,14.26,61.82,41.86,5.8,28.54-16,60.74-51.12,66.29M91.9,162.21c-28.77-3.27-52.19-20.84-58.15-43.45-9.38-35.6,26.22-77.29,65.82-76,27.34.87,55.59,22.19,59.58,53.2,4,31.5-18.28,62.6-51.92,69.17m-16,6.07c-29.41-9.81-49.38-34.5-50.16-60.55-1.21-40.43,44.11-76.2,79.23-65.49C149.4,54,167.32,93.4,156.75,126c-11.08,34.12-48,43.8-50.48,44.41m-16.93,4c-33.07-6-57.9-31.44-61-60.7C24,72.85,63.06,36.3,102.76,37.93c25.36,1,50.8,17.65,59.59,42,12.2,33.83-9,78.87-54.32,95.37m-21.4-22.84c-8.74-1.57-36.4-7.59-46.17-28.28C23.8,88.91,66.22,25.85,108.67,29.94,140,33,171,72.52,162.5,111.25,157,136.47,135.65,156.79,108,163.33m-16.45-2.88c-29.24-7.59-50.08-31-51.92-56.71C37,66,75.77,30,112.19,37.45,139.11,43,160.05,71.28,158,101.51c-1.82,27.24-21.92,50.65-49.52,57M80.88,183.78c-5.13-.71-45.21-6.85-65-42.18C-4.07,106.06,8.48,62.3,33.11,38.25,71.14,1.11,143.74,5.3,174.65,50.07c22.75,33,19.68,83.28-9.43,111.82-17.8,17.46-39.89,21.41-49.68,22.53m-24.44-15c-33.73-5.67-58.62-32.89-60.54-63.9C28.12,66.12,63.44,31.93,101.8,33c39.82,1.08,73,39.86,67.09,71.88-4,22-27.17,44.77-49.52,44.73a33,33,0,0,1-7.18-.8m-30,34.67C50,180.65,22.78,160.25,12.5,131.54-2.74,89,28.41,53.41,30.72,50.87c32.35-35.65,94.75-38.08,129.71-6.07,2.81,2.57,33.2,31.35,25.88,71.4-5.94,32.48-34.2,58.82-70.93,64.7m-39.46,4.95c-3.81-1.24-46.83-16.1-59.74-60.54C6,90.39,18.59,51.33,47.81,29.78,84.66,2.61,139.89,9.29,168.26,44.48,188.83,70,194.73,109.87,175.12,141c-20.61,32.69-57.85,37.32-62.93,37.86M88.38,160.93c-27.85-5.75-48.15-28.37-50-54.15-2.31-32.26,25-59,54.8-62.78,31-4,66.88,16.5,69.48,49.2,2.13,26.74-18.61,53.9-49.84,60.07m-21.88,8.14c-26.72-4.4-47.07-24.07-50.8-47.92C35.66,84.88,57.38,64.86,59.63,62.85,80,44.71,112.14,42.27,136,57.9c23.44,15.36,35.87,46.22,25.4,73.8-8.39,22.07-29.74,37.53-54.64,39.46M90,167c-3.87-.56-29.42-4.71-43.61-27.79-13.43-21.85-9.61-49.13,3.83-67.57C67,48.53,97.25,41.61,121,49c35.26,10.92,57.21,53.68,43.45,87.38-13.19,32.31-52,38.66-54.15,39M91.1,164.93c-3.45-.3-28.39-2.83-42.81-24.44-15.54-23.29-5.82-49.12-3.84-54,12.3-30.25,51.61-53.16,84.67-39.61,33.57,13.76,39.32,56.38,35.14,81.94-6,36.86-35.64,56.51-41.21,60.07M87.9,171.64c-3.51-.65-36.82-7.31-51.27-38.18-13.13-28-3.19-60,15.81-78.6,26.78-26.27,70.6-25.17,93.13-7.35,30.75,24.33,34.9,90.09-12.62,142.66m-47-9.43a81.31,81.31,0,0,1-37.7-12.62C15.19,146.44-3.39,96.55,15.7,57.58c24-48.89,97.92-61.66,137.86-26,37,33,30,94.34,3.19,127.64-11.92,14.79-26.6,22.58-36.58,26.67M67,188.73C55,185.09,40.9,178.21,31,164.93,5.77,130.9,15.2,63.88,62.19,40.81c34.72-17.06,82-6.21,103,26.67,24.13,37.76,8.83,97.06-41,121.89M71,187.29c-10.27-2.89-34.87-11.42-49.36-34.5C-3.34,113,10,43.42,61.87,22.91c39.63-15.67,88.54,2.58,108,41.06,21.84,43.21,1.22,101.45-49.2,122.84m-43-1c-16.45,2.22-26.39-1.48-32.59-5.91C12,156.28,13.51,60,67.14,33.46,111.32,11.55,183.91,40.41,192.7,94c6,36.57-18.82,77.93-62.3,95.21m-50.32-4.32c-11.84.69-29.11-.53-43.29-11.34C5.52,149.74,3.94,90.54,33,54.86c24.73-30.4,74.54-47.27,110.39-23.64C182.26,56.89,181.4,115,160.75,149.27c-12.61,20.95-31.58,31.34-41.86,35.94m-31.62-4.47c-10.79.73-27.44-.08-41.7-10.22-30.93-22-35.14-77-10.7-112.62C56.54,26.27,103.29,6.11,140.78,26c36.49,19.31,44.3,66,35.94,98.56-10.8,42.17-48.62,60.68-54.47,63.42M89.66,180.1c-2.39.1-36.54.9-53.19-24.6C23.15,135.1,30.3,112.09,34.39,99c2.37-7.63,15.09-48.52,49.68-57.19,38.32-9.6,89.84,23.78,87.86,65.34-1.39,29.1-28.77,57.2-66.61,62.14m2.39,8.47c9.4.27,23.66-.86,37.54-9,30.68-17.87,45.63-61.61,31.95-97C160.59,28.87,105.33,7.47,63.78,27.87,26.51,46.17,3.55,96.51,24.17,131.54c13,22.07,41,34.17,71.24,32.27m-1.28,13.1c-33.33-2.79-62.31-20-72.68-45.69C3.74,87.3,43.2,25.63,95.09,22.75c42.06-2.33,87.72,34.22,85.15,80.36-2,35.58-32.14,67.4-72.69,72.52m-13.9-7C54,166,23,138.34,18.58,106.14c-5.95-43,37.1-81.93,80.67-81.95,40.16,0,82.84,33,80.19,75.88-2.17,35.08-34.07,66.28-75.4,68.05m-12.62,3.36C47,169.39,13.59,136.2,12,100.71c-1.93-43.67,45.06-76,86.9-75.4,41.24.62,86.51,33.44,84.66,78.27-1.49,36.17-33.2,69.16-75.72,73.17m-20.76-25.4c-3.51.08-20.32.12-33.07-12.62-15-15-12.28-35.66-11.66-40.26,3.24-24.36,23.71-42.87,45-48.24a57.42,57.42,0,0,1,30.68.8c2.07.64,29.78,9.77,37.54,37.22a53.05,53.05,0,0,1-1.6,32.91c-2.14,5.54-7,18.26-20.45,24.6a38,38,0,0,1-21.56,3M91.74,155c-22.15-2.38-40.59-16.23-46.65-35.3-7.17-22.56,6.29-42,9.27-46.33,1.43-2.07,19.33-27.08,48.4-26.2,29.49.9,57.85,28.06,55.75,58.47-1.55,22.43-19.36,42.05-38.66,47.45a43.62,43.62,0,0,1-11,1.59M93,159c-34.87-2.67-60.94-30.27-61.51-60.39C30.84,62.6,66.94,38.05,98.45,37c35.53-1.22,74.35,27.1,72.68,64.54-1.34,30.1-28.48,57.68-64.54,60.22M91.1,172.91c-42.7-2.53-75.48-35.54-77.32-72.68C11.55,55.14,55.64,18.36,100.2,21.32,142.83,24.15,180.56,63,175.6,106c-3.78,32.85-31.64,61.08-68.69,67.09m-15.33,6.71C45.49,177.23,10.45,140.07,10.27,99c-.21-47.34,45.88-81.76,90.25-80.19,45,1.6,88.2,40.22,84.35,86.42-3,36.27-34.28,68.14-75.88,73.48M92.7,178c-46.43-3.35-80.24-43-77.16-84.51C18.46,54,53.83,24.61,90.78,22.27c44.45-2.8,87.44,33.82,87.06,79.24-.3,36-27.77,69.11-66.77,77.63M90.94,156.78c-3.41-.12-27.79-1.36-43.13-21.73-19.26-25.57-5.49-56.32-4.63-58.14C54.4,53,80.32,41.34,102.76,42.4c31.64,1.5,66.08,28.65,62.78,62.94-2.53,26.26-26.49,49.36-57.83,52.24m-15.17,3.83c-31-2.61-56.86-19.17-64.7-42.17C15.06,81.73,52.22,32.79,97,30.74c40.74-1.86,82.26,35.34,76.84,75.72-3.87,28.78-30.86,53.85-66.3,58M92.38,166.2C53.93,163.32,24.51,134.5,21.93,102c-3.3-41.63,38.3-78,80.51-74.12,37.11,3.39,70.39,37.46,66.45,76.51C165.77,135.34,140,161.81,106,167m-11.51,1.12c-42.05-1.57-73-37.16-70.12-73.8,3-38.36,42-62.95,77.15-61.18,36.09,1.81,72.94,31.66,70.93,71.08-1.7,33.38-30.68,62.59-68.21,64.86m-10.86.64c-37.4-2.19-66.18-34-64.86-70.13,1.4-38.32,36.2-68.67,73.8-64.7,34,3.6,60.8,34.63,59.43,70.93m-75.4,77c-46.92-5.55-80.71-46.34-78-89.94C11.4,44.54,58,13.8,100.52,14.45c46.34.71,92.15,38.83,90.58,87.54-1.26,38.87-32.36,74.2-75.56,82.11m-46.81,5.27c-39.5-15-65.15-51.44-64.05-89.46C6.13,49.51,54.16,11,102.76,12.05c41,.9,81.61,30,90.42,72.68,7.65,37.15-10.25,77.22-40.58,94.57a75.69,75.69,0,0,1-30,9.43m-46.81-1.6c-41.63-11-70-46.9-70-85,.08-49.05,47.37-87.9,96-85.47C149,19,191.45,60,188.7,107.58c-2.06,35.72-29.16,68-67.73,79.07m-26.36-24c-36.54-3.05-62.86-34.95-59.74-68,3.24-34.4,37-56.22,67.89-55.27,33.31,1,66.56,28.56,65,64.37-1.3,30.15-26.83,56.7-60.39,59.59M79.6,185.53C35.5,176.58,5.53,136.17,9.47,93.84c4.34-46.62,48.18-78,91.53-76.36,45.52,1.75,86.42,39.81,85.63,86.1-.64,37-27.71,70.89-66.94,81.63M87.58,180.9C45.82,175,16.37,137.49,20,97.83,23.85,56.08,62.81,29,100,29c41,0,80.9,32.82,81.15,76,.22,36.07-27.21,69.2-66,76.84M82,184.26c-44.31-7.58-74-49.5-67.09-91.7s47.73-69.64,88.34-65.65c38.83,3.81,71.72,35.87,73.64,76.2,1.73,36.27-22,70.06-58,81.31M87.11,152.47c-26.81-4.86-46.32-26.58-47.45-50.8C38.25,71.5,66,51.14,88.38,46.08c3.76-.85,25.35-5.33,45.69,8.14,2,1.29,28.53,19.54,26.2,49.36-1.82,23.32-20.53,43.73-46.17,49.05M71.29,188.89c-36-13.47-61-44.45-63.58-78.92C4.06,61.18,46.11,14.57,98,13.17c50.09-1.35,95.92,39.85,95.21,89.3-.56,38.5-29.24,74.24-70.93,85.46M66.5,189.37c-2.85-1-48.77-17.06-60.23-64.7C-4.34,80.55,23.75,47.35,27.52,43c4.77-5.44,25.27-27.55,58.79-31.15,38.61-4.15,80.15,17.83,96.48,56.55,13.6,32.24,9,74.26-17.89,99.36-15.59,14.58-33.84,18.94-43.45,20.45m-49.36-.8c-4.88-1.61-45.23-15.67-58-55.27C1,91.48,24,45.29,62.66,26.91s89.36-7.38,111.51,28c29,46.2-11.36,101.67-13.1,104a107,107,0,0,1-36.74,30.67M89.5,174.35c-36.52-3.49-64.83-31.58-67.89-65C18.36,73.9,44.74,46.1,71,35.69c34.2-13.56,78.65-1.71,96.81,32,12.08,22.41,10.77,51.22-3.68,73.48-19.32,29.77-52.55,33.06-56.55,33.39M92.06,160.13c-34.08-3-59.88-29.3-61.66-58.78-2.22-36.76,33.58-67.14,70-65.5,34.43,1.56,66.54,31.66,63.74,67.26-2.2,28-25.5,52.61-56.87,57.5M92.7,163.17C56,160.38,28.56,132.81,27,103.11c-1.91-37.45,38-66.5,74.76-65,32.05,1.29,66.79,26,68.37,63.42,1.48,34.93-26.48,66.71-63.9,69.65M90.62,155.82C61.87,150.64,40.89,128.88,39,105,36.43,72,71.27,44.32,104.36,45.92c28.7,1.38,60.13,25,58.62,57.35-1.24,26.65-24.38,50.43-54.95,52.87M91.42,170.36c-39.64-1.8-70-35.39-68.37-72.85,1.82-40.73,40.83-69.05,78.27-65.65s71.58,38.53,65.18,75.08c-4.49,25.64-28,47.17-58.79,52.24M90,175.15c-36.91-4.65-65.82-30.48-71.56-61.82C10.25,68.8,50.49,22.24,97.81,23.39c39.35,1,76.54,34.75,75.56,77-.83,35.39-28.21,66.87-65.82,73.32M69.69,189.37a57.43,57.43,0,0,1-10.54-1.76C27.7,179.25,13.08,145.92,10.91,141c-18-41,2.52-79.87,3.83-82.26,2.11-3.85,20.87-36.82,60.38-46.17C132.86-1.13,175.38,49.7,178,53,189.25,66.86,193.05,79.4,193.81,82c8.77,30.12-4.05,56.06-7.82,63.42s-17.83,34.74-46.49,42.33a58.82,58.82,0,0,1-13.26,1.92M87.11,182c-40.4-8.76-68.82-44.77-67.9-84.67,1-44.55,38.36-80.4,81-81.94,48.93-1.77,86.72,42.31,87.54,87.38.69,37.46-24.23,72.84-62.46,87.06m-47-3.36C37,177.73,9.11,139.64,13,99.91c4.28-43.82,45.59-73,86.11-71.56,37.32,1.32,73.57,28.62,79.55,69.32,5.76,39.24-18.51,77.82-57.35,89.94M92.38,179c-42.31-2.66-74-38.73-71.73-77.95,2.28-39.82,38.66-67.89,75.24-68.69,39.77-.88,78.26,30.51,79.23,72,.82,34.93-25.1,67.35-62.3,75.24m-22-21.88c-33.73-6.13-58.45-29.69-61-55.11C25.93,64.85,71.55,28.5,112.82,36c32.91,6,64.16,40.06,56.07,75.56-5.86,25.76-31,46-62,48.08M83.11,183.3l-1.32-.3-1.29-.32c-.8-.21-76.86-31.85-73.11-89.16C10.54,45.34,68.27,7.16,119.53,18.28c38.8,8.41,76.5,45.62,72.21,91.53-3.4,36.4-32.21,67.85-71.41,76.2M91.26,164.93c-42.6-6.79-69.66-43.46-65.34-75.72,5.36-40,57.88-65,96.33-49.84,23.45,9.27,44.5,34.62,42.49,65.17-2,30.27-26,56.26-58.15,61.34m-33.7,21.41c-31.79-13.61-51.76-44-50.16-75.24,2-39.93,39-75.91,78-71.4,30.92,3.58,53.62,31.63,58.95,59.9,6.12,32.45-10.38,66.6-41.53,84M94,166.84C54.58,165,25.74,132.12,27.84,98.47c2.38-38.07,43.44-62,78.43-57.82C134.35,44,162.6,66,166.5,97.19c4.21,33.74-21.22,68.26-59.91,75.08m-25.4,13.1c-43-9.89-71.47-49.36-67.65-89.84C18,48,65.58,14.78,111.23,21.8,161.64,29.55,194.66,84.08,181,128c-13.17,42.43-63.44,54.42-65.82,54.95M92.06,165.09c-32.78-2.29-58.51-26.37-61.82-54.8C26,74.08,59.38,41.43,95.73,41.44c30.13,0,58,22.48,63.58,52.72,6.25,33.87-17.05,69-53.83,76.84M87.42,153.42C57.13,148,35.17,126.11,33.27,102.63c-2.68-33.19,35.4-61.19,70-58.95,35.38,2.29,68.81,36.35,62,71.25-4.8,24.52-28.54,44.66-58.63,47.76M92.06,173.07c-34.95-8.51-58.36-40.83-55.59-74.92,2.71-33.41,30.17-63.66,64.85-64.21,36.61-.59,62.77,32.2,67.1,63.25,4.86,35-17.51,70.7-54.48,83.39M91.42,156.14c-30.83-4.38-53.75-27.77-55.91-54-2.81-34,30.26-61.44,62.94-63.42,33.61-2,63.28,23,70,53.83,7.75,35.75-16.44,74.69-56.71,84.51M87,150.39c-21.5-2.48-39.93-15-46.33-32.59-9.17-25.19,6.91-59.25,40.89-70.92m0,134.5c-30.87-8.92-53.61-34.75-57.66-65.5C18.85,78,43.68,43.85,75.28,32c4.13-1.55,30-10.77,57.19,1.76,34.31,15.81,56,59.55,42.18,97.76-14.07,38.81-56.46,48.83-59.59,49.52M79.6,183.14c-43.18-9.32-72.4-49.42-68.21-91.7,4.15-42,39.93-73,79.71-75.87,42.37-3.09,84.37,26.09,91.69,70.76,7.05,43-20.48,85.25-63.42,96.33M0,0H0M87.58,180.9m3.36-5.59c-33.65-7.19-59-31.65-63.26-60.06C20.94,70,69.73,26.71,111.39,32.66c47.33,6.76,77.87,76,54.47,111.66-16.53,25.2-54.73,25.72-60.7,25.72M88.22,180.42c-3-.42-51.17-7.75-67.41-46.16C3.29,92.81,31.48,35.56,80.72,24.35c42.15-9.59,89.8,16.82,99.52,62.94,9.22,43.76-19.35,88-63.9,97.6m-45,3.2c-2.62-1-51.65-19.66-61.18-69C1.78,75.93,27.8,30.85,68.73,16.68,115.38.54,171.2,28.05,187.9,80.9M58.19,186.65C26.25,169,6.13,137.1,6.59,103.74,7.27,55.86,50.25,13.45,101,13.81c50.58.36,94.51,43.09,93.13,91.85-1,36-26.5,69.28-64.21,83.07M0,0H0M93.34,157.9c-6.06.56-21.86,1.18-36.59-8.63-21.14-14.09-29.61-42.75-21.88-66,9.86-29.62,41.91-37.94,48.4-39.62,32.89-8.53,79.86,3.28,93.13,38.5,13.92,36.92-18.72,74.3-39.29,89.46a94.06,94.06,0,0,1-22.37,12.14M90.46,173.71c-28.88-3.8-53.2-20.05-61.66-43.13-13.9-37.92,18.84-83.82,58.47-93C134,26.83,188,67.58,185,112.53c-1.95,29.57-28.33,57.49-65.34,66.61M116,183.3c38.52-7.39,68.78-32.4,75.72-63.26C203,70,150.88,14,95.57,16.52c-45.29,2.11-93,43.55-86.26,91.54,5.08,36,39.51,66.67,83.55,69.33M69.21,189.53c-37.84-14.07-63.39-47.65-64.53-84C3.12,56.13,46.94,14.6,95.41,11.73,140,9.09,182.28,39.45,193.34,81.22c7.31,27.62,1,60.26-19.81,83.39a90,90,0,0,1-39.62,25.24M94,168.12c-38.63-4.2-68.15-31.48-72.36-62.94C15.89,62.39,58.89,25.79,100,23.07c45.48-3,93.82,35,90.58,81.79-2.55,36.81-36.44,69.85-80.67,72.53m-15.5-13.26c-33.12-4.92-58.09-29.22-61.66-57.35C28,68.68,64,36.29,99.73,32.82,140.37,28.87,184,62.1,182,103.74c-1.7,34.9-35,66.51-77.31,65.82M92.7,159c-30.53-5.42-52.89-28.46-55.12-54-3-34.92,32.53-63.83,66.94-64.21s70.76,27.69,68.53,63.89c-1.87,30.27-30.16,57.14-66.14,57.35m-16.13-6.71c-33-4.83-58.68-25.43-63.58-50.16C19.84,68,61.24,30.6,102.28,28.35,140.82,26.23,184.8,54.8,186,98.63c1.08,39.85-33.66,76-78,75.72m-16-12.94c-26.55-6.29-46.26-28-49.36-54C39.08,77.2,59.27,52,81.67,42.08c34.34-15.22,80.27,2.57,89.78,34.19,9.22,30.66-15.95,73.78-63.26,82.27m-21.08-7.83c-16.43,1.16-51.95,1.51-65-18.69C1.36,100,38.69,18.7,96.85,14.13c47.28-3.72,100.5,43.87,91.85,93.29-5.87,33.59-39.27,61.94-81.79,65.49M91.1,179.78c-43.84-3.09-77.37-39.14-77.48-80-.12-46.5,43-81.92,86.9-79.71,40.42,2,80.34,35.93,78.12,79.39-1.85,36-32.13,67.84-72.37,72.21M93.5,176C57.83,172,29,149,21.77,119.72c-11.26-45.38,31.32-97.2,78.91-94.09,34.62,2.26,70,33.44,68.53,74-1.27,34.16-28.4,63.93-64.69,68.85m-13.74,4c-37.84-5-66-34.1-68.21-66.61C19.71,64.25,60.12,30.4,100.84,29.94c38.12-.43,76.73,28.37,79.56,70.45,2.59,38.62-25.91,74.32-66,80.51m-33.7,4.47c-36-7-64.06-31.79-70.93-62.62-10-45.07,28-90.43,73-99.36,40.77-8.08,89.67,13.23,102.88,57.35,13.1,43.78-13.74,94-62.3,108.15m-37.7-6.23c-37-5.77-65.67-31.88-71.41-63.42-8.19-45,32.32-91,79.71-92.33,37.68-1.06,76.78,26.14,82.75,68.37,5.7,40.25-20.81,79.35-61.34,89.14m-23-18.22c-36.18-3.6-63-33.72-62.62-66.93C30.21,61.55,65.64,35,100,34.58c33.86-.38,69.58,24.6,71.57,62.3,1.88,35.62-27.14,68.18-65.49,70.12M87.9,151.67c-30-2.58-54.84-17-61-37.06-10-32.35,29.71-75.9,71.57-76.2C129.69,38.19,168.68,62,167.78,97c-.7,27.08-25,53.08-58.95,57.18m-17.09,16c-40.2-2-70.65-29.3-73.48-58.47-3.8-39.06,42.82-72.28,82.9-69.49,25.75,1.8,63.21,19.47,65.18,53.36,1.66,28.68-22.74,57.79-58.15,62M89.5,173.71c-37.12-3.27-65.18-30.53-67.57-60.54C18.79,73.65,61.11,41.25,100,43.36c28.06,1.52,59,21.2,65.18,52.72,6.69,33.86-17.11,71.17-56.87,80.83M95.41,163.49C66.73,156.15,46.23,133,44.13,107.1c-2.85-35.42,29.08-70.68,62.62-67.25,29.66,3,50.08,35.21,49.84,63.42-.24,30.14-24,49.24-26,50.79a66.68,66.68,0,0,1-23.65,11.67M87.27,181.38c-33.29-12.79-52.51-46.13-47-78,5.2-29.87,32.15-58,63.9-55.91,34.82,2.35,58.44,40,55.43,73.33-2.31,25.6-20.33,48.33-46.33,58.94M76.24,187C38.18,166.5,22.32,123.71,35.83,90.81c10.72-26.14,41-48.63,72.84-42C141.16,55.54,168.31,91.23,158,120c-6.17,17.29-24.84,29.32-46.8,32.59M93,169.24c-28.08-8.48-48.46-30.53-51-55.27-4-39.19,37.63-78.1,75.56-70,23.8,5.1,43.87,28.24,45.36,54.79,1.74,30.82-21.88,60-55.75,65.34m-16.77,7.19c-28.33-10.79-50.29-31.74-53-55.75C32.33,71,94.2,24.09,137.58,40.17,175.7,54.29,193,114.62,170.17,152.79c-14.37,24-40.24,31.92-49,34.18M71,188.25C43.79,161.61,34,123.6,45.89,91.6,61.16,50.49,110.78,23.11,140,37.45c30.51,15,33.4,72.9,14.54,110.22-9.92,19.63-24.85,31.57-34.67,38m-28.11-6.87c-34-9.13-60.06-31.32-63.74-56.7-6.81-47,64.17-96.84,104.79-78.92,32,14.13,45,70.31,25.56,108.79-10.14,20.1-26.91,31-36.42,36.1m-39.62-4C41.4,176,12.17,142.69,11.07,106.46,9.64,59.81,55.29,22.72,101.16,24.19c40.35,1.3,78.28,32.34,83.39,75.4,4.47,37.72-17.4,74.86-53.83,90.1m-60.23-.48c-8.92-1.31-25.23-5.14-38.34-18.21C7,145.87,14.19,107.1,16.66,93.84,19,81.24,26.49,41.05,62,22.27c35.3-18.65,85.11-9.22,112.3,26,26.57,34.47,23.26,82.91-1.28,112.62-15.59,18.88-36.05,25.75-45.69,28.28M73.05,187c-8.91-1.39-35.07-6.67-52.56-28.91-25.4-32.3-19.15-83.4,9.91-113.58C52,22,86,11.37,117.78,20.2c38.36,10.66,71.39,49.18,65.17,92.49-4.79,33.39-31.71,61.31-67.41,69.65m-38.66,3.83c-2.66-.57-50.65-11.79-66.61-58.14C8.92,124.12-3.62,85.55,20.49,50.39c17.84-26,47.15-37.63,71.73-37.7C147.4,12.54,206,70.54,193,122.91c-7.52,30.31-37.73,53.54-74.29,62.14m-34.5-3.67c-31.9-.11-60.65-17.27-73.8-44.25-14.66-30-3.59-59.21-1.6-64.22m78.75,96c-47.14-24.1-59.45-75.17-42-101,17.34-25.64,65.54-28.39,93.29-8,4.19,3.09,18.31,13.46,21.25,31,4.2,25.06-16.14,54.49-52.4,69.17m-27.31,20c-7.9-3.57-68.22-31.82-73.65-83.22A65.81,65.81,0,0,1,9,71c10.48-34,52.9-63.92,96.49-55.75,44.87,8.4,77.89,54.75,69,99-6.05,30.12-30.59,54.86-62.94,64.37m-25.88-.16C41.75,154.71,14.89,115.3,18.58,78.19c.53-5.39,2.81-28.29,21.24-46.33C58.65,13.43,82.22,11.93,90.3,11.41c29.66-1.88,74.49,10.62,92,51,18.13,41.73-2.68,90.9-35.62,109.11a70.79,70.79,0,0,1-31.95,8.46M90.3,156.78C60.46,151.71,38,129.56,34.87,103.9,30.73,69.64,62.67,41.54,94,36.49c32.08-5.18,67,13.29,76.36,43,11,34.74-14.55,79.85-61.82,89.3m-16.77-4c-34.62-1.94-62.54-26.45-67.57-56.87C18,70.56,48.37,37,83.43,29.78c36.84-7.58,74.86,14.73,85.62,49,12.36,39.4-13.87,86.17-60.38,96.49M91.9,160C55.56,149.53,29.72,123.6,28.32,97c-2.27-43.12,60-85.81,105-67.42C175.13,46.74,190,111.82,163,148c-17.55,23.55-47.21,27.35-55.11,28.12m-21.4-22.84c-7.14-1.57-28.89-7.32-39.94-26.2-18.42-31.48,1-85.6,39.3-93.61,32.1-6.72,69.29,20.71,72.84,57.66,3,31.05-18.46,61.43-51.28,69.81m-14.85,4.16c-30.22-5.8-53.34-28.38-57.83-55.59C28.63,72.66,57.79,34.14,97.49,31.38s75.5,31.42,73,69.81c-2,31-28.47,58.19-63.42,61.82M90,169.24c-35.67-9.54-59.87-42.75-58-78.91C33.86,54.41,61,24,95.73,18.44c35.93-5.74,78.13,15.43,84.19,52.08,5.8,35.1-23.22,74.23-67.57,78.59m-23,13.42c-1.08-.15-2.56-.4-4.31-.78-18.88-4.13-41.31-18.57-49.84-40.59-11.12-28.71,2.89-66.4,33.39-82.11,29.07-15,68.19-7.44,85.94,20.13,13.29,20.64,13.68,51.09-3.52,71.4-13.17,15.56-31.38,18.95-37.38,19.81M80.4,168.12C43.58,148.74,30.09,107.88,44,79.94c11-22.13,37.39-32.56,59.75-31,28.75,2,62.84,24.75,60.86,56.55C163,130.6,139.44,153.8,108,156.14m-20.92,15C46.26,167.61,15,136.83,11.87,101.35,8,57.46,48.8,24.1,85.67,19.08c44-6,90.7,27.26,101.91,79.87M75.44,166.84C43.79,153.9,23.28,125.1,24.33,96.72,25.75,58.1,67,21.62,117.94,27.87"
      stroke={computedColor}
      strokeWidth="1"
      fill="none"
      strokeMiterlimit="10"
    />
  );
};

export default LogoIcon;
