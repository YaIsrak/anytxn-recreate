'use client';

import { useInView } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { AnimatedNumber } from './ui/animated-number';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export default function TrustedBySection() {
	return (
		<div className='py-[5vmin] container-section'>
			{/* Header */}
			<h3 className='text-sm font-bold text-primary/80 text-center font-montserrat uppercase mb-4'>
				TRUSTED BY THE BEST
			</h3>

			<div className='flex flex-col lg:flex-row divide-y lg:divide-none divide-primary/50 divide-dashed'>
				<List
					icon='<'
					title={20}
					subtitle={'Years of Experience'}
				/>
				<List
					icon='+'
					title={40}
					subtitle={'Financial Institutions'}
				/>
				<List
					icon='m<'
					title={200}
					subtitle={'Customers Each'}
				/>
			</div>

			{/* items */}
			<Carousel className='mt-16'>
				<CarouselContent className='items-center'>
					<CarouselItem className='basis-1/3 lg:basis-1/5'>
						<Image
							src={'/testimonial/testi1.png'}
							alt='testimonial'
							width={200}
							height={200}
							className='w-full'
						/>
					</CarouselItem>
					<CarouselItem className='basis-1/3 lg:basis-1/5'>
						<Image
							src={'/testimonial/testi2.png'}
							alt='testimonial'
							width={200}
							height={200}
							className='w-full'
						/>
					</CarouselItem>
					<CarouselItem className='basis-1/3 lg:basis-1/5'>
						<Image
							src={'/testimonial/testi3.png'}
							alt='testimonial'
							width={200}
							height={200}
							className='w-full'
						/>
					</CarouselItem>
					<CarouselItem className='basis-1/3 lg:basis-1/5'>
						<Image
							src={'/testimonial/testi4.png'}
							alt='testimonial'
							width={200}
							height={200}
							className='w-full'
						/>
					</CarouselItem>
					<CarouselItem className='basis-1/3 lg:basis-1/5'>
						<Image
							src={'/testimonial/testi5.png'}
							alt='testimonial'
							width={200}
							height={200}
							className='w-full'
						/>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	);
}

function List({
	title,
	subtitle,
	icon,
}: {
	title: number;
	subtitle: string;
	icon: string;
}) {
	const [value, setValue] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref);

	if (isInView && value === 0) {
		setValue(title);
	}

	return (
		<div className='flex flex-row lg:flex-col flex-1 items-center justify-between py-6'>
			<h3
				className='text-6xl md:text-7xl font-semibold bg-gradient-to-t from-primary to-primary/70 bg-clip-text text-transparent font-montserrat'
				ref={ref}>
				<AnimatedNumber
					springOptions={{
						bounce: 0,
						duration: 1000,
					}}
					value={value}
				/>
				{icon}
			</h3>
			<p className='text-sm font-semibold mt-6 lg:text-base lg:font-normal'>
				{subtitle}
			</p>
		</div>
	);
}
