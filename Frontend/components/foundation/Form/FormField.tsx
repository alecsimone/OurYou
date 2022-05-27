import { ChangeEventHandler } from 'react';
import Input from '@styles/extendableElements/Input';
import Error from '../Error';

interface FormFieldInterface {
  type: 'text' | 'email' | 'password';
  name: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
}

interface FormFieldProps {
  fieldType: 'input';
  requirements?: string;
  fieldProps: FormFieldInterface;
}

const FormField = ({
  fieldType,
  requirements,
  fieldProps,
}: FormFieldProps): JSX.Element => {
  let formElement;

  if (fieldType === 'input') {
    formElement = (
      <Input
        title={requirements}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...fieldProps}
      />
    );
  } else {
    return <Error error="Unknown field type" />;
  }

  return (
    <div className="inputWrapper">
      {formElement}
      {requirements != null && (
        <div className="requirements">{requirements}</div>
      )}
    </div>
  );
};

export default FormField;
