import { ChangeEventHandler } from 'react';

interface BasicFieldProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export type { BasicFieldProps };
