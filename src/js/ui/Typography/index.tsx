import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

interface Props {
	children?: React.ReactNode;
	type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
}

interface HTMLAttributesProps {
	[key: string]: any;
	id?: string | number;
	className?: string;
}

export type TypographyProps = Props & HTMLAttributesProps;

const getTypographyStyle = (type: string) => {
	return cn('typography', type);
};

const H: React.FC<TypographyProps> = (props: TypographyProps) => {
	const { type, children } = props;
	switch (type) {
		case 'H1':
		default:
			return <h1 className={ getTypographyStyle(type) }>{ children }</h1>;
		case 'H2':
			return <h2 className={ getTypographyStyle(type) }>{ children }</h2>;
		case 'H3':
			return <h3 className={ getTypographyStyle(type) }>{ children }</h3>;
		case 'H4':
			return <h4 className={ getTypographyStyle(type) }>{ children }</h4>;
		case 'H5':
			return <h5 className={ getTypographyStyle(type) }>{ children }</h5>;
		case 'H6':
			return <h6 className={ getTypographyStyle(type) }>{ children }</h6>;
	}
};

export default H;
