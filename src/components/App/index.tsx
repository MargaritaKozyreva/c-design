import React from 'react';
import { Card } from '../../ui';
import { H1, H2, H3, Span, P } from '../../ui/Typography';
import '../../scss/index.scss';
import '../../static/index.scss';

const App = () => {
	return (
		<Card id={ 1 } design="default">
			<Card.Zone direction="row" margin="xl">
				<H1>left</H1>
				<H2>center</H2>
				<H3>right</H3>
			</Card.Zone>

			<Card.Content margin="xl">
				<H2 weight="bold" transform="capitalize">
					Содержание
				</H2>
				<Span weight="regular">
					Actually you are correct. I have not yet been convinced that dynamic definition of mixins is a good idea.
					However the issue you linked to was about including a mixin using a dynamic name. Which I am for. The OP's
					problem is solved better by accepting an argument to a single mixin instead of defining a unique mixin for
					each icon.
				</Span>
			</Card.Content>

			<Card.Zone direction="row" margin="xl">
				<P size="m" weight="bold">
					Footer
				</P>
			</Card.Zone>
		</Card>
	);
};

export default App;
