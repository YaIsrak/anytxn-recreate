import { cn } from '@/lib/utils';
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
		style={{
			clipPath: 'polygon(0 0, 100% 35%, 100% 100%, 0% 100%)',
		}}
	/>
));

export default function ContactUsSection() {
	return (
		<div className='relative'>
			<div className='container-section py-[20vmin] text-white'>
				<div className='overflow-hidden'>
					<svg
						className='absolute top-0 left-0 -z-10 h-full w-full'
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						style={{
							clipPath: 'polygon(0 0, 100% 35%, 100% 100%, 0% 100%)',
						}}>
						<rect
							fill='#2563eb'
							width='100'
							height='100'></rect>
					</svg>
					<div className='-z-10'>{backgrounds}</div>
				</div>
				<div className='space-y-4 z-50'>
					<h1 className='text-3xl font-bold font-montserrat md:text-4xl lg:text-5xl'>
						Legacy no longer
					</h1>
					<p className='text-sm lg:text-base'>
						Talk to us to find out how we can transform your organisation
						for the future
					</p>
					<Button
						variant='outline'
						size={'lg'}
						className={cn(
							'rounded-none w-full md:w-auto lg:flex text-base font-semibold shadow-md tranisition-all',
							'border-none text-secondary-foreground bg-secondary hover:bg-secondary hover:gap-3 transition-all hover:text-secondary-foreground hover:shadow-black/30',
						)}>
						Contact Us
						<ChevronRight className='w-4 h-4' />
					</Button>
				</div>
			</div>
		</div>
	);
}
