import React, { MouseEventHandler } from 'react';
import './styles.scss';
import cn from 'classnames';

export interface Props extends HTMLAttributesProps {
	name: any;
	onClick?: MouseEventHandler<HTMLSpanElement>;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	disabled?: boolean;
	color?: any;
}

interface HTMLAttributesProps {
	className?: string;
}

const setDefaultStyle = (props: Props) => {
	const { onClick, disabled } = props;
	const style: any = {};
	if (disabled) {
		style.cursor = 'not-allowed';
		style.opacity = 0.2;
	}
	if (onClick && !disabled) {
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
	const { onClick, disabled = false, ...attrs } = props;
	return (
		<span
			className={ setDefaultClassName(props) }
			style={ setDefaultStyle(props) }
			onClick={ !disabled ? onClick : undefined }
			{ ...attrs }
		/>
	);
};

export { Icon };
