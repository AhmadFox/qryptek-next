import tw from 'twin.macro';

const CheckboxWrapper = tw.div`flex items-center space-x-2`;
const CheckboxInput = tw.input`absolute z-[-9] opacity-0`;
const CheckboxLabel = tw.label`text-gray-500 pl-8 relative before:absolute before:content-[''] before:left-0 before:w-6 before:h-6 before:border before:border-orange-500`;

const Checkbox = ({ field, value, id }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput id={id} type="checkbox" value={value} {...field}/>
      <CheckboxLabel htmlFor={id}>{value}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
