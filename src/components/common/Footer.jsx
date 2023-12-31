// Import Packeges:
import { useForm, Controller } from 'react-hook-form';

// Import Styled Components:
import Container from "../ui/Container";
import Section from "../ui/Section";
import Input from "../ui/form/Input";
import { Title } from "../ui/Titles";
import { Button } from "../ui/Buttons";
import { NavLink } from '@/components/ui/NavLink';

const quickLinks = [
	{ title: 'Home', path: '/' },
	{ title: 'Core Values', path: '/core-values' },
	{ title: 'contact Us', path: '/contact' },
	{ title: 'Services', path: '/services' },
	{ title: 'Careers', path: '/careers' },
	{ title: 'Privacy Policy', path: '/privacy-policy' }
];

const Footer = () => {

	const { handleSubmit, control, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(JSON.stringify(data));
	};

	return (
        <footer>
			<Section >
				<Container>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 3xl:gap-16 justify-stretch sm:justify-start mb-8 md:mb-12 xl:mb-20">
						<div className="grid justify-center sm:justify-stretch gap-y-6 md:gap-4 xl:gap-y-5 col-span-2 sm:col-span-1">
							<Title type='p' display="d4" variant='footer'>Quick Links</Title>
							<ul className="grid justify-center sm:justify-start md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
								{quickLinks.map((item, idx) => (
									<li className="text-center sm:text-start" key={idx}>
										<NavLink href={item.path} className="text-center sm:text-start">{item.title}</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div className="grid justify-center sm:justify-end lg:justify-normal gap-6 md:gap-4 xl:gap-y-5 col-span-2 sm:col-span-1 lg:pl-12 xl:pl-16 h-fit">
							<Title type='p' display="d4" variant='footer'>Contact</Title>
							<div className="grid gap-y-4 justify-center sm:justify-start">
								<NavLink href="tel:7089646855" className="text-center sm:text-start 3xl:text-lg">708.964.6855</NavLink>
								<NavLink href="mailto:clientServices@qryptek.com" className="text-center sm:text-start">ClientServices@qryptek.com</NavLink>
							</div>
						</div>
						<div className="grid justify-stretch gap-y-6 md:gap-4 xl:gap-y-5 col-span-2 md:col-span-1">
							<Title type='p' display="d4" variant='footer'>Receive news</Title>
							<form onSubmit={handleSubmit(onSubmit)} className="relative">
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
											className='col-span-2 sm:col-span-1'
											field={field}
										/>
									)}
								/>

								<Button type="submit" outline="true" rounded="true" className="!p-0 w-10 h-10 flex justify-center items-center stroke-light hover:stroke-dark !absolute top-0 xl:top-2 right-0">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} className="w-5 h-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
									</svg>
									<span className="sr-only">Subscribe Newsletter Button</span>
								</Button>
							</form>
						</div>
					</div>
					<hr className="my-9 border-gray-800" />
					<p className="text-gray-500 text-sm text-center font-semibold">© Copyright 2022 - Qryptek Inc. - All Rights Reserved.</p>
				</Container>
			</Section>
		</footer>
    );
}

export default Footer;