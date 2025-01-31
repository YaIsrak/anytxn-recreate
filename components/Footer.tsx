import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoCall, IoMail } from 'react-icons/io5';

export default function Footer() {
	return (
		<footer className=' bg-[#002045]'>
			<div className='container-section flex items-center justify-between py-10'>
				<Link
					href={'/'}
					className='uppercase text-white text-4xl lg:text-5xl font-black  font-montserrat'>
					Any
					<span className='font-semibold'>Tech</span>
				</Link>

				<div className='flex items-center gap-4 lg:hidden'>
					<FaLinkedin className='w-6 h-6 text-primary hover:text-primary/90 transition-colors' />
					<IoCall className='w-6 h-6 text-primary hover:text-primary/90 transition-colors' />
					<IoMail className='w-6 h-6 text-primary hover:text-primary/90 transition-colors' />
				</div>

				<div className='hidden lg:flex items-center gap-4'>
					<Link
						href={'/'}
						className='text-primary hover:text-primary transition-colors text-sm font-semibold'>
						Our Solutions
					</Link>
					<Link
						href={'/'}
						className='text-primary hover:text-primary transition-colors text-sm font-semibold'>
						AnyCass
					</Link>
					<Link
						href={'/'}
						className='text-primary hover:text-primary transition-colors text-sm font-semibold'>
						AnyBD
					</Link>
				</div>
			</div>

			<hr className='border-t border-primary' />

			<div className='bg-[#0e1b31]'>
				{/*  */}
				<div className='container-section py-6 text-primary flex items-center justify-center flex-col gap-4 lg:flex-row lg:justify-between'>
					<p className='text-xs font-bold'>
						©2023 All rights reserved. Any Technology Pte Ltd.
					</p>
					<Link
						href='/privacy-policy'
						className='text-xs font-bold'>
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	);
}
