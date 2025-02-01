import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

const backgrounds = [1, 2, 3, 4, 5, 6].map((i) => (
	<Image
		key={i}
		src={`/backgrounds/${i}.svg`}
		className='absolute -z-10 top-0 left-0 h-full w-full object-cover'
		alt=''
		width={100}
		height={100}
	/>
));

export default function HeroSection() {
	return (
		<div className='relative'>
			{/* <div className='absolute inset-0 z-10 w-1/2'>{backgrounds}</div> */}
			<div className=' grid grid-cols-1 lg:grid-cols-2 items-center gap-8 overflow-hidden bg-primary text-white'>
				{/* Left content */}
				<div className='container-section  lg:ps-[25vmin]  relative'>
					<h1 className='text-5xl lg:text-7xl font-semibold font-montserrat mb-6'>
						Embrace the future of finance
					</h1>
					<p className='text-sm font-bold font-montserrat mb-6'>
						Reimagine financial services with AnyTech’s open platform,
						distributed banking solution that powers transformation
					</p>
					<Button
						variant='outline'
						size={'lg'}
						className='rounded-none w-full md:w-auto lg:flex text-base font-semibold shadow-md tranisition-all border-none text-secondary-foreground bg-secondary hover:bg-secondary hover:gap-3 transition-all hover:text-secondary-foreground hover:shadow-black/30'>
						Reach Out to Us
						<ChevronRight className='w-4 h-4' />
					</Button>
				</div>

				{/* Right image section */}
				<div className='relative  min-h-screen w-full'>
					<div className='absolute inset-0 lg:left-[10%] w-screen lg:w-full h-full'>
						<Image
							src='/backgrounds/frame3.jpg'
							alt='Future of finance'
							className='w-full h-full object-cover object-right'
							width={500}
							height={500}
						/>

						<div className='absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent' />
					</div>
				</div>
			</div>
		</div>
	);
}
