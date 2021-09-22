import React from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributesProps{
	children?: React.ReactNode;
	title?: string;
	header?: React.ReactNode;
	actions?: React.ReactNode;
	footer?: React.ReactNode;
	stretch?: boolean;
	design: 'default' | 'success';
}

interface HTMLAttributesProps {
	[key: string]: any;
	id?: string | number;
	className?: string;
}

const Card: React.FC<Props> = (props: Props) => {
	const style = cn('card', `card--${ props.design || 'default' }`, props.className);
	return (
		<div className={ style }>
			{ props.title && <header>{ props.title }</header> }
			{ props.children && <main>{ props.children }</main> }
			{ props.footer && <footer>{ props.footer }</footer> }
		</div>
	);
};

export default Card;