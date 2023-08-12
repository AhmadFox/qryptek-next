// Import Packeges:
import { useForm, Controller } from 'react-hook-form';

// Contexts:
import { useRequsetModal } from '@/context/RequsetModalContext';

// Import Styled Components:
import { Button } from '../ui/Buttons';
import { Label } from '../ui/form/Label';
import Input from '../ui/form/Input';
import SelectOption from '../ui/form/SelectOption';
import Checkbox from '../ui/form/CheckBox';

const RequsetProjectForm = () => {

	// Context Hook:
	const { closeRequsetModal } = useRequsetModal();

	// React Form Hook:
	const { handleSubmit, control, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		closeRequsetModal();
	};

	const servicesOptions = [
		'Business Analysts',
		'UX/UI Designers',
		'Software Engineers',
		'Solution Architects',
		'Project Managers',
		'Consultations',
	];

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4 md:gap-x-9 xl:gap-7 text-start'>

			<Controller
				name="projectName"
				control={control}
				rules={{ required: true, minLength: 5, maxLength: 30 }}
				render={({ field }) => (
					<Input 
						type='text'
						name='projectName'
						required={true}
						placeholder="What's your project name?"
						hasError={errors.projectName ? true : false}
						msgError='Project Name is required'
						id='projectName'
						className='col-span-2 sm:col-span-1'
						field={field}
					/>
				)}
			/>

			<Controller
				name= {'industry'}
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					
					<SelectOption
						name={'industry'}
						required={true}
						placeholder="Select Feild Industry"
						hasError={errors.industry ? true : false}
						msgError={'Project industry is required'}
						id='projectIndustry'
						className='col-span-2 sm:col-span-1'
						options={['Technology', 'Factories', 'Chemistry', 'Finance', 'Oil & Gaz', 'Health Care']}
						field={field}
					/>
				)}
			/>

			<Controller
				name="email"
				control={control}
				rules={{
					required: true,
					pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
				}}
				render={({ field }) => (
					<Input 
						type='email'
						name='email'
						required={true}
						placeholder="Email Address"
						hasError={errors.email ? true : false}
						msgError={
							errors && errors.email && errors.email.type === "required" ? 'email is required': 'Please write correct email address'
						}
						id='email'
						className='col-span-2'
						field={field}
					/>
				)}
			/>

			<Controller
				name="fName"
				control={control}
				rules={{
					required: true,
					minLength: 3
				}}
				render={({ field }) => (
					<Input 
						type='text'
						name='fName'
						required={true}
						placeholder="Your Name"
						hasError={errors.fName ? true : false}
						msgError='Your Name is required'
						id='fName'
						className='col-span-2 sm:col-span-1'
						field={field}
					/>
				)}
			/>

			<Controller
				name="company"
				control={control}
				rules={{
					required: false,
				}}
				render={({ field }) => (
					<Input 
						type='text'
						name='company'
						required={true}
						placeholder="Company Name (Optional)"
						hasError={errors.company ? true : false}
						msgError='Company Name is required'
						id='company'
						className='col-span-2 sm:col-span-1'
						field={field}
					/>
				)}
			/>

			<div className='col-span-2'>
				<Label>Choos Service:</Label>
				<Controller
					name="services"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<div className='grid sm:grid-cols-2 gap-3 mb-3'>
							{servicesOptions.map((option, idx) => (
								<Checkbox
									id={option}
									key={idx}
									field={field}
									value={option}
								/>
							))}
						</div>
					)}
				/>
				<span className='text-red-400 block capitalize text-sm'>
					{errors.services && 'At least one service should be selected.'}
				</span>
			</div>

			<div className="col-span-2 flex justify-center mt-4 sm:mt-6">
				<Button type='submit' effect='true' outline='true' rounded='true'>Submit Project</Button>
			</div>
	  
    </form>
	)
}
	
export default RequsetProjectForm;