import { cn } from '@/deps/shadcn/utils';
import React from 'react';

const icons = {
	'add-circle': '/assets/icons/add-circle.svg',
	add: '/assets/icons/add.svg',
	'arrow-back': '/assets/icons/arrow-back.svg',
	'arrow-forward': '/assets/icons/arrow-forward.svg',
	'arrow-left': '/assets/icons/arrow-left.svg',
	'arrow-linked': '/assets/icons/arrow-linked.svg',
	'arrow-right': '/assets/icons/arrow-right.svg',
	bell: '/assets/icons/bell.svg',
	'book-open': '/assets/icons/book-open.svg',
	'calendar-done': '/assets/icons/calendar-done.svg',
	car: '/assets/icons/car.svg',
	'chart-bar': '/assets/icons/chart-bar.svg',
	'chat-single': '/assets/icons/chat-single.svg',
	checkmark: '/assets/icons/checkmark.svg',
	'chevron-down': '/assets/icons/chevron-down.svg',
	'chevron-left': '/assets/icons/chevron-left.svg',
	'chevron-right': '/assets/icons/chevron-right.svg',
	'chevron-up': '/assets/icons/chevron-up.svg',
	close: '/assets/icons/close.svg',
	'code-block': '/assets/icons/code-block.svg',
	code: '/assets/icons/code.svg',
	copy: '/assets/icons/copy.svg',
	'delete-circle': '/assets/icons/delete-circle.svg',
	delete: '/assets/icons/delete.svg',
	delivery: '/assets/icons/delivery.svg',
	dislike: '/assets/icons/dislike.svg',
	dot: '/assets/icons/dot.svg',
	download: '/assets/icons/download.svg',
	drag: '/assets/icons/drag.svg',
	'dropdown-arrow': '/assets/icons/dropdown-arrow.svg',
	edit: '/assets/icons/edit.svg',
	education: '/assets/icons/education.svg',
	ellipsis: '/assets/icons/ellipsis.svg',
	email: '/assets/icons/email.svg',
	'file-textual': '/assets/icons/file-textual.svg',
	file: '/assets/icons/file.svg',
	'heading-1': '/assets/icons/heading-1.svg',
	'heading-2': '/assets/icons/heading-2.svg',
	'heading-3': '/assets/icons/heading-3.svg',
	home: '/assets/icons/home.svg',
	image: '/assets/icons/image.svg',
	language: '/assets/icons/language.svg',
	'layout-list': '/assets/icons/layout-list.svg',
	'layout-mosaic': '/assets/icons/layout-mosaic.svg',
	like: '/assets/icons/like.svg',
	'link-new-tab': '/assets/icons/link-new-tab.svg',
	link: '/assets/icons/link.svg',
	'list-ordered': '/assets/icons/list-ordered.svg',
	'list-unordered': '/assets/icons/list-unordered.svg',
	location: '/assets/icons/location.svg',
	'log-out': '/assets/icons/log-out.svg',
	logout: '/assets/icons/logout.svg',
	'markup-minimum': '/assets/icons/markup-minimum.svg',
	markup: '/assets/icons/markup.svg',
	'menu-burger': '/assets/icons/menu-burger.svg',
	message: '/assets/icons/message.svg',
	'mode-dark': '/assets/icons/mode-dark.svg',
	'mode-light': '/assets/icons/mode-light.svg',
	moon: '/assets/icons/moon.svg',
	newsletter: '/assets/icons/newsletter.svg',
	notification: '/assets/icons/notification.svg',
	options: '/assets/icons/options.svg',
	'order-completed': '/assets/icons/order-completed.svg',
	order: '/assets/icons/order.svg',
	partners: '/assets/icons/partners.svg',
	'pause-solid': '/assets/icons/pause-solid.svg',
	phone: '/assets/icons/phone.svg',
	'play-solid': '/assets/icons/play-solid.svg',
	'role-admin': '/assets/icons/role-admin.svg',
	search: '/assets/icons/search.svg',
	settings: '/assets/icons/settings.svg',
	'share-external': '/assets/icons/share-external.svg',
	share: '/assets/icons/share.svg',
	showcase: '/assets/icons/showcase.svg',
	sidebar: '/assets/icons/sidebar.svg',
	'status-danger': '/assets/icons/status-danger.svg',
	'status-info': '/assets/icons/status-info.svg',
	'status-pending': '/assets/icons/status-pending.svg',
	'status-warning': '/assets/icons/status-warning.svg',
	sun: '/assets/icons/sun.svg',
	'text-bold': '/assets/icons/text-bold.svg',
	'text-italic': '/assets/icons/text-italic.svg',
	'text-strikethrough': '/assets/icons/text-strikethrough.svg',
	theme: '/assets/icons/theme.svg',
	trash: '/assets/icons/trash.svg',
	upload: '/assets/icons/upload.svg',
	'user-add': '/assets/icons/user-add.svg',
	'user-role': '/assets/icons/user-role.svg',
	user: '/assets/icons/user.svg',
	users: '/assets/icons/users.svg',
	'visibility-off': '/assets/icons/visibility-off.svg',
	visibility: '/assets/icons/visibility.svg',
	crown: '/assets/icons/crown.svg',
	help: '/assets/icons/help.svg',
	cloud: '/assets/icons/cloud.svg',
	'cloud-slash': '/assets/icons/cloud-slash.svg',
	refund: '/assets/icons/refund.svg'
};

export const iconNames = Object.keys(icons);

export type IconName = keyof typeof icons;

export const Icon: React.FC<{
	icon: IconName;
	className?: string;
}> = ({ icon, className }) => {
	return (
		<div
			className={cn(
				'transition-all ease-in duration-200 shrink-0',
				'size-6 bg-neutral',
				className
			)}
			style={{
				WebkitMaskImage: `url('${icons[icon]}')`,
				maskImage: `url('${icons[icon]}')`,
				WebkitMaskRepeat: 'no-repeat',
				WebkitMaskSize: 'contain',
				WebkitMaskPosition: 'center center',
				maskRepeat: 'no-repeat'
			}}
		/>
	);
};
