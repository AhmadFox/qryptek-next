import tw, { styled } from 'twin.macro';

const Input = styled.input(({type, placeholder, hasError, id}) => [
	tw`w-full placeholder:text-gray-400`,
	hasError && tw`border-red-700 border-opacity-50`,
	{type: type},
	{id: id},
	{placeholder: placeholder}
]);

export default Input;