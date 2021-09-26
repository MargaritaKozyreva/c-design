import React from 'react';
import cn from 'classnames';
import './styles.scss';

interface Props extends HTMLAttributesProps {
	children?: React.ReactNode;
}

interface HTMLAttributesProps {
	id?: string | number;
	className?: string;
}

const Content: React.FC<Props> = (props: Props) => {
	const { children, className } = props;
	const style = cn('content', className);

	return <div className={ style }>{ children }</div>;
};

Content.displayName = 'Card.Content';
export { Content };
