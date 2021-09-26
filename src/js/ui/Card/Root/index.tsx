import React from 'react';
import cn from 'classnames';
import { CardContext } from '../context';
import { Zone } from '../Zone';
import { Content } from '../Content';
import './styles.scss';

interface Props extends HTMLAttributesProps {
	children?: React.ReactNode;
	title?: string;
	header?: React.ReactNode;
	actions?: React.ReactNode;
	footer?: React.ReactNode;
	stretch?: boolean;
	design?: 'default' | 'success';
}

interface HTMLAttributesProps {
	id?: string | number;
	className?: string;
}

const Card = (props: Props) => {
	const style = cn('card', `card--${ props.design || 'default' }`, props.className);
	return (
		<CardContext.Provider value={ {} }>
			<div className={ style }>{ props.children }</div>
		</CardContext.Provider>
	);
};

Card.Zone = Zone;
Card.Content = Content;

export default Card;
