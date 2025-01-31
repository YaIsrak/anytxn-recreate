import Frame1 from '@/public/backgrounds/frame1.jpg';
import Frame2 from '@/public/backgrounds/frame2.jpg';
import Frame3 from '@/public/backgrounds/frame3.jpg';
import { CableIcon, CpuIcon, LightbulbIcon } from 'lucide-react';

export const navLinks = [
	{
		name: 'Solutions',
		path: '/solutions',
		isDropdown: true,
		dropdownItems: [
			{
				name: 'Solution 1',
				path: '/solution-1',
			},
			{
				name: 'Solution 2',
				path: '/solution-2',
			},
		],
	},
	{
		name: 'Services',
		path: '/services',
	},
	{
		name: 'About Us',
		path: '/about-us',
	},
];

export const philosophies = [
	{
		icon: CableIcon,
		title: 'Full-suite solutions',
		content:
			'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.',
	},
	{
		icon: LightbulbIcon,
		title: 'Simplify the complex',
		content:
			'Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.',
	},
	{
		icon: CpuIcon,
		title: 'Cutting-edge tech',
		content:
			'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.',
	},
];

export const technologies = [
	{
		image: Frame1,
		subtitle: 'Customer focused',
		title: 'Purpose-built financial services',
		content:
			'Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.',
	},
	{
		image: Frame2,
		subtitle: 'Agile and Adaptable',
		title: 'Powered by AI, Blockchain, and Cloud Computing',
		content:
			'Unleash the power of artificial intelligence, blockchain, and cloud computing to transform your financial operations and drive innovation',
	},
	{
		image: Frame3,
		subtitle: 'Compliance ready',
		title: 'Manage compliance with ease',
		content:
			'Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.',
	},
];
