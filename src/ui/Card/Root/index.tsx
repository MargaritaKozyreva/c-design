import React from 'react';
import { CardContext } from '../context';
import Zone from '@ui/Card/Zone';
import { Layout } from '@ui/Card/Layout';
import { Content } from '@ui/Card/Content';
import './styles.scss';

interface Props extends HTMLAttributesProps {
	children?: React.ReactNode;
	actions?: React.ReactNode;
	stretch?: boolean;
	design?: 'default' | 'success';
}

interface HTMLAttributesProps {
	id?: string | number;
	className?: string;
}

const Card = (props: Props) => {
	return (
		<CardContext.Provider value={ {} }>
			<Layout design={ props.design || 'default' }>{ props.children }</Layout>
		</CardContext.Provider>
	);
};

Card.Zone = Zone;
Card.Content = Content;

export default Card;
