import {useState} from 'react';
import tw, { styled } from 'twin.macro';

import { Label } from './Label';

const SelectTag = styled.select(({hasError}) => [
	tw`w-full text-gray-500 placeholder:text-gray-500 disabled:text-gray-800`,
	hasError && tw`text-red-400 border-red-400`,
]);

const SelectOption = ({ name, placeholder, hasError, msgError, className, options, field, label }) => {

	const [selectedValue, setSelected] = useState('');

	const handleChange = event => {
	  setSelected(event.target.value);
	};

	return (
		<div className={`relative ${className}`}>
			{label && <Label>{label}</Label>}
			<SelectTag onChange={handleChange} value={selectedValue} name={name} hasError={hasError ? true : false} {...field}>
				<option value='' className='text-gray-500'>{placeholder}</option>
				{
					options.map((item, idx) => (
						<option key={idx} value={item}>{item}</option>
					))
				}
				
			</SelectTag>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-gray-500 absolute top-1/2 right-2 -translate-y-1/2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>

			<span className='text-red-400 block capitalize text-sm'>
				{hasError && msgError}
			</span>
      </div>
	)
}

export default SelectOption;