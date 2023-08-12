import { Fragment, useRef } from 'react';

// Contexts:
import { useRequsetModal } from '@/context/RequsetModalContext';

// Import Tailwend Modal Component:
import { Dialog, Transition } from '@headlessui/react';

// Import Icons:
import { Close } from '../icons';
import { Title } from './Titles';
import RequsetProjectForm from '../forms/RequsetProjectForm';

export default function Modal() {

	// Context Hook:
	const { isRequsetModalOpen, closeRequsetModal } = useRequsetModal();
	
	// Modal Design Hook:
	const cancelButtonRef = useRef(null);

	return (
		<Fragment>

			<Transition.Root show={isRequsetModalOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeRequsetModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-md transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-md bg-slate-900 transition-all sm:my-8 w-full sm:max-w-2xl">

									<div className="flex justify-between items-center py-5 px-4">
										<Title type='p' display='d6' className='!text-base md:!text-2xl'>
											{isRequsetModalOpen && 'Requset Project'}
										</Title>
										<button onClick={closeRequsetModal} className='outline-none stroke-light hover:stroke-orange-500 ease-in-out duration-300'>
											<Close className='w-8 h-8' />
										</button>
									</div>
									<hr className='border-gray-700 border-opacity-60' />
									<div className="px-5 py-4">
										{isRequsetModalOpen && <RequsetProjectForm />}
									</div>

								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</Fragment>
	)
};