import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { technologies } from '@/lib/constants';
import Image, { StaticImageData } from 'next/image';

// todo: background image
export default function TechnologySection() {
	return (
		<div className='py-[5vmin] container-section'>
			{/* Header */}
			<h3 className='text-sm font-bold text-primary/80 text-center font-montserrat uppercase mb-4'>
				TECHNOLOGY BUILT FOR YOU
			</h3>
			<h1 className='text-4xl font-semibold text-center my-2 font-montserrat lg:text-5xl mb-8'>
				The future of finance
			</h1>

			<div className='w-full overflow-hidden'>
				<Carousel className='cursor-grab'>
					<CarouselContent className='gap-4 '>
						{technologies.map((item, i) => (
							<CarouselItem key={i}>
								<Card
									title={item.title}
									content={item.content}
									image={item.image}
									subtitle={item.subtitle}
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
	image,
	subtitle,
}: {
	title: string;
	content: string;
	image: StaticImageData;
	subtitle: string;
}) {
	return (
		<div className='flex flex-col lg:flex-row w-full bg-white p-6 rounded-2xl border'>
			<div className='order-1 lg:order-1 lg:w-1/2 lg:pr-4'>
				<h4 className='text-sm text-primary font-bold mb-4 uppercase font-montserrat'>
					{subtitle}
				</h4>
				<h1 className='font-montserrat text-2xl lg:text-3xl font-semibold mb-4'>
					{title}
				</h1>
				<p className='text-sm'>{content}</p>
			</div>
			<div className='order-2 lg:order-2 lg:w-1/2'>
				<Image
					src={image}
					alt={title}
					className='w-full mt-6 lg:mt-0 rounded-xl'
				/>
			</div>
		</div>
	);
}
