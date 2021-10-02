import React from 'react';
import './styles.scss';
import cn from 'classnames';

export interface Props extends HTMLAttributesProps {
	name: any;
	action?: any;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: any;
}

interface HTMLAttributesProps {
	className?: string;
}

// const setDefaultStyle = (props: Props) => {
// 	return { textTransform: props.transform };
// };

const setDefaultClassName = (props: Props) => {
	const { name = 'arrow', size = 'm', color = 'black' } = props;
	return cn('icon', `icon--name-${ name }`, `icon--size-${ size }`, `icon--color-${ color }`);
};

const Icon: React.FC<Props> = (props) => {
	const { ...attrs } = props;
	return <span className={ setDefaultClassName(props) } { ...attrs } />;
};

export { Icon };
