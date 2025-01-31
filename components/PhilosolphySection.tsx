import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { philosophies } from '@/lib/constants';
import FlowChartImg from '@/public/flowchart.png';
import FlowChartImgMobile from '@/public/flowchart_mobile.png';
import { LucideProps } from 'lucide-react';
import Image from 'next/image';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export default function PhilosolphySection() {
	return (
		<div className='py-[5vmin] container-section'>
			{/* Header */}
			<h3 className='text-sm font-bold text-primary/80 text-center font-montserrat uppercase mb-4'>
				Our Philosophy
			</h3>
			<h1 className='text-4xl font-semibold text-center my-2 font-montserrat lg:text-5xl mb-4'>
				Human-centred innovation
			</h1>

			{/* Content image */}
			<div className='relative w-full py-4 mb-6'>
				<Image
					src={FlowChartImgMobile}
					alt='Philosophy'
					layout='responsive'
					className='md:hidden'
				/>

				<Image
					src={FlowChartImg}
					alt='Philosophy'
					layout='responsive'
				/>
			</div>

			<div className='w-full overflow-hidden'>
				<Carousel className='cursor-grab'>
					<CarouselContent className='gap-4'>
						{philosophies.map((item, i) => (
							<CarouselItem
								key={i}
								className='basis-full md:basis-1/2  lg:basis-1/3'>
								<Card
									title={item.title}
									content={item.content}
									icon={item.icon}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}

function Card({
	title,
	content,
	icon,
}: {
	title: string;
	content: string;
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>;
}) {
	const Icon = icon;
	return (
		<div className='p-6 bg-primary/5 rounded-2xl'>
			<div className='bg-primary/20 size-8 flex items-center justify-center rounded-full mb-4'>
				<Icon className='size-4 ' />
			</div>
			<h1 className='font-montserrat text-2xl lg:text-3xl font-semibold mb-4'>
				{title}
			</h1>
			<p className='text-sm'>{content}</p>
		</div>
	);
}
