import React from 'react';
import cn from 'classnames';
import './styles.scss';

interface Props extends HTMLAttributesProps {
	children?: React.ReactNode;
	left?: React.ReactNode;
	right?: React.ReactNode;
}

interface HTMLAttributesProps {
	id?: string | number;
	className?: string;
}

const Zone: React.FC<Props> = (props: Props) => {
	const { children, className, left = <></>, right = <></> } = props;
	const style = cn('zone', className);

	return (
		<div className={ style }>
			{ left && <div className={ cn('zone', 'zone--left') }> { left } </div> }
			{ children }
			{ right && <div className={ cn('zone', 'zone--right') }> { right } </div> }
		</div>
	);
};

Zone.displayName = 'Card.Zone';
export { Zone };
