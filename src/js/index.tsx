import React from 'react';
import ReactDom from 'react-dom';
import '../static/index.scss';
import { Card } from './ui/Card';
import { H1, H2, H3, P, Span } from './ui/Typography';

const DemoPage = () => {
	return (
		<Card id={ 1 } design="default" title="Цель">
			<Card.Zone left={ <H2 transform="uppercase">Мой прогресс</H2> } right={ <button>click</button> } />
			<Card.Content>
				<P weight="regular" size="m">
					Мой прогресс
				</P>
				<Span weight="regular">
					Actually you are correct. I have not yet been convinced that dynamic definition of mixins is a good idea.
					However the issue you linked to was about including a mixin using a dynamic name. Which I am for. The OP's
					problem is solved better by accepting an argument to a single mixin instead of defining a unique mixin for
					each icon.
				</Span>
			</Card.Content>
		</Card>
	);
};

ReactDom.render(<DemoPage />, document.getElementById('root'));
