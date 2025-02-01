'use client';

import { navLinks } from '@/lib/constants';
import useWindowScroll from '@/lib/useWindowScroll';
import { cn } from '@/lib/utils';
import { DialogTitle } from '@radix-ui/react-dialog';
import {
	ChevronDownIcon,
	ChevronRight,
	GlobeIcon,
	MenuIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Navbar() {
	const { state } = useWindowScroll();
	const isScrolled = state.y > 120;

	return (
		<nav
			className={cn(
				'fixed w-full z-50 transition-all bg-primary lg:bg-white/0 text-white lg:text-black',
				isScrolled &&
					'text-primary shadow-primary/10 shadow-lg bg-white lg:bg-white lg:text-primary',
			)}>
			<div className='container-section py-4 flex items-center justify-between'>
				{/* Link */}
				<Link
					href={'/'}
					className='uppercase text-2xl lg:text-3xl font-black  font-montserrat'>
					Any
					<span className='font-semibold'>Tech</span>
				</Link>

				{/* middle Links */}
				<div className='lg:flex items-center hidden gap-2'>
					{navLinks.map((item) => (
						<NavLink
							key={item.name}
							name={item.name}
							path={item.path}
							isDropdown={item.isDropdown}
							dropdownItems={item.dropdownItems}
						/>
					))}

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								className={cn(
									'hidden gap-1 lg:flex rounded-full transition-all bg-transparent',
									!isScrolled
										? 'text-black border-black'
										: 'text-pretty border-primary',
								)}
								variant='outline'>
								<GlobeIcon className='w-2 h-2' />
								EN
								<ChevronDownIcon className='w-4 h-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>EN (English)</DropdownMenuItem>
							<DropdownMenuItem>FR (French)</DropdownMenuItem>
							<DropdownMenuItem>DE (German)</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* action button */}
				<Button
					variant='outline'
					size={'lg'}
					className={cn(
						'rounded-none hidden lg:flex text-base font-semibold shadow-md tranisition-all bg-transparent',
						!isScrolled
							? 'border-black text-black'
							: 'border-none text-secondary-foreground bg-secondary hover:bg-secondary hover:gap-3 transition-all hover:text-secondary-foreground hover:shadow-black/30',
					)}>
					Contact Us
					<ChevronRight className='w-4 h-4' />
				</Button>

				{/* mobile  manu */}
				<div className='lg:hidden'>
					<Sheet>
						<SheetTrigger>
							<MenuIcon className='size-6' />
						</SheetTrigger>
						<SheetContent className='bg-primary border-0 text-white'>
							<DialogTitle>
								<Link
									href={'/'}
									className='uppercase text-2xl lg:text-3xl font-black  font-montserrat'>
									AnyTech
								</Link>
							</DialogTitle>

							<div className='flex flex-col mt-6 space-y-4'>
								{navLinks.map((item) => (
									<NavLink
										key={item.name}
										name={item.name}
										path={item.path}
										isDropdown={item.isDropdown}
										dropdownItems={item.dropdownItems}
									/>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}

function NavLink({
	name,
	path,
	isDropdown,
	dropdownItems,
}: {
	name: string;
	path: string;
	isDropdown?: boolean;
	dropdownItems?: { name: string; path: string }[];
}) {
	if (isDropdown && dropdownItems) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger className='flex items-center gap-2 p-2'>
					{name}
					<ChevronDownIcon className='w-4 h-4' />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{dropdownItems.map((dropdownItem) => (
						<DropdownMenuItem
							asChild
							key={dropdownItem.name}>
							<Link href={`${path}${dropdownItem.path}`}>
								{dropdownItem.name}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	} else {
		return (
			<Link
				href={path}
				className='border-b border-black/0 hover:border-primary transition-all px-4 py-2'>
				{name}
			</Link>
		);
	}
}
