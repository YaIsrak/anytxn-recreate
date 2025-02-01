import AboutImg from '@/public/about.png';
import Image from 'next/image';

const backBackgrounds = [1, 3].map((i) => (
	<Image
		key={i}
		src={`/backgrounds/${i}.svg`}
		className='absolute -z-10 top-0 left-0 h-full w-full object-cover'
		alt=''
		width={100}
		height={100}
	/>
));

const frontBackground = (
	<Image
		src={`/backgrounds/6.svg`}
		className='absolute bottom-0 left-0 h-1/2 w-full object-cover'
		alt=''
		width={100}
		height={100}
	/>
);

export default function AboutSection() {
	return (
		<div className='relative'>
			<div className='py-[15vmin] container-section'>
				<svg
					className='absolute top-0 left-0 -z-10 h-full w-full opacity-5'
					viewBox='0 0 100 100'
					preserveAspectRatio='none'
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
					}}>
					<rect
						fill='#2563eb'
						width='100'
						height='100'></rect>
				</svg>

				<div className='max-w-4xl w-full p-4'>
					{/* <!-- Container --> */}
					<div className='grid grid-cols-1 md:grid-cols-3 space-y-6'>
						{/* <!-- Title --> */}
						<div className='md:col-span-2'>
							<h4 className='text-sm font-bold text-primary/80 font-montserrat uppercase mb-4'>
								POWERING THE FUTURE OF FINANCE
							</h4>
							<h1 className='text-2xl md:text-3xl font-semibold font-montserrat uppercase'>
								Uncovering new ways to delight customers
							</h1>
						</div>
						{/* <!-- Image --> */}
						<div className='md:row-span-2 relative p-10 lg:p-6'>
							{backBackgrounds}
							<div className='relative'>
								<Image
									src={AboutImg}
									alt='About'
									layout='responsive'
									className='shadow-lg shadow-primary/50'
								/>
							</div>
							{frontBackground}
						</div>

						{/* <!-- Description --> */}
						<div className='md:col-span-2'>
							<p className='text-sm'>
								<span className='font-bold'>
									AnyTech is revolutionising financial technology by
									introducing innovative and real-time transaction
									account processing capabilities, specifically
									designed for retail financial services.
								</span>
								<br />
								<br />
								Our modern approach surpasses traditional banking and
								card processing systems, empowering you with the most
								advanced technology for lasting success.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
