import tw, { styled } from 'twin.macro';

import { Label } from './Label';

const InputTag = styled.input(({hasError}) => [
	tw`w-full placeholder:text-gray-500`,
	hasError && tw`placeholder:text-red-400 border-red-400`,
]);

const Input = ({ type, name, label, placeholder, hasError, msgError, id, className, field }) => {

	return(
		<div className={`relative ${className}`}>
			{label && <Label>{label}</Label>}
			<InputTag
				type={type}
				name={name}
				placeholder={placeholder}
				id={id}
				hasError={hasError ? true : false}
				{...field}
			/>
			<span className='text-red-400 block capitalize text-sm pt-2'>
				{hasError && msgError}
			</span>
		</div>
	)

}
export default Input;