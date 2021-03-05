export const AxisLeft = ({ yScale }) => {
	return yScale.domain().map((tickVal) => (
		<g className='tick'>
			<text
				key={tickVal}
				style={{ textAnchor: "end" }}
				x={-3}
				y={yScale(tickVal) + yScale.bandwidth() / 2}
				dy='.31em'
			>
				{tickVal}
			</text>
		</g>
	));
};
