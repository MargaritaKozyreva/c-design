import React from 'react';
import './styles.scss';
import cn from 'classnames';

export interface Props extends HTMLAttributesProps {
	name: any;
	onClick?: () => any;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: any;
}

interface HTMLAttributesProps {
	className?: string;
}

const setDefaultStyle = (props: Props) => {
	const { onClick } = props;
	const style: any = {};
	if (onClick) {
		style.cursor = 'pointer';
	}

	return style;
};

const setDefaultClassName = (props: Props) => {
	const { name = 'arrow', size = 'm', color = 'black' } = props;
	return cn(
		'icon',
		`icon--name-${ name }`,
		`icon--size-${ size }`,
		`icon--color-${ color }`
	);
};

const Icon: React.FC<Props> = (props) => {
	const { onClick, ...attrs } = props;
	return (
		<span
			className={ setDefaultClassName(props) }
			style={ setDefaultStyle(props) }
			onClick={ onClick }
			{ ...attrs }
		/>
	);
};

export { Icon };
