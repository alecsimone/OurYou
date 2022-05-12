import Input from '@styles/extendableElements/Input';

interface BottomBarFormProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  submitForm: () => void;
}

const BottomBarForm = ({
  placeholder,
  value,
  setValue,
  submitForm,
}: BottomBarFormProps): JSX.Element => (
  <form
    className="bottomBarInputWrapper"
    onSubmit={(e) => {
      e.preventDefault();
      submitForm();
    }}
  >
    <Input
      type="text"
      className="bottomBarInput"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </form>
);

export default BottomBarForm;
