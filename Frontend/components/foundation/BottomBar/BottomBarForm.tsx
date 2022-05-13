import Input from '../../../styles/extendableElements/Input';

interface BottomBarFormProps {
  currentForm: string | null;
  value: string;
  setValue: (value: string) => void;
  submitForm: () => void;
}

const BottomBarForm = ({
  currentForm,
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
      className="bottomBarInput"
      placeholder={currentForm === 'search' ? 'Search' : 'Thing Title'}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </form>
);

export default BottomBarForm;
