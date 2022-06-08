import { ChangeEventHandler } from 'react';
import FormField from './FormField';

interface fieldGenerator {
  (value: string, onChange: ChangeEventHandler<HTMLInputElement>): JSX.Element;
}

const makeDisplayNameField: fieldGenerator = (value, onChange) => (
  <FormField
    key="displayName"
    fieldType="input"
    requirements="Display Name must be at least 3 characters long"
    fieldProps={{
      type: 'text',
      required: true,
      name: 'displayName',
      placeholder: 'Display Name',
      minLength: 3,
      maxLength: 24,
      value,
      onChange,
      pattern: '.{3,24}',
    }}
  />
);

export { makeDisplayNameField };

const makeEmailField: fieldGenerator = (value, onChange) => (
  <FormField
    key="email"
    fieldType="input"
    requirements="Must be a valid email address"
    fieldProps={{
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      value,
      onChange,
      required: true,
    }}
  />
);

export { makeEmailField };

const makePasswordField: fieldGenerator = (value, onChange) => (
  <FormField
    key="password"
    fieldType="input"
    requirements="Password must be at least 8 characters long"
    fieldProps={{
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      value,
      onChange,
      required: true,
      minLength: 8,
      pattern: '.{8,}',
    }}
  />
);

export { makePasswordField };

const makeConfirmPasswordField = (
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  firstPasswordEntry: string
): JSX.Element => (
  <FormField
    key="confirmPassword"
    fieldType="input"
    requirements="Passwords must match"
    fieldProps={{
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
      value,
      onChange,
      required: true,
      pattern: firstPasswordEntry,
    }}
  />
);

export { makeConfirmPasswordField };
