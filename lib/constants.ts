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
