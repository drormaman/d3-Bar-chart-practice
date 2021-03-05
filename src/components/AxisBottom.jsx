export const AxisBottom = ({ xScale, innerHeight, tickFormat }) => {
	return xScale.ticks().map((tickVal) => (
		<g
			className='tick'
			key={tickVal}
			transform={`translate(${xScale(tickVal)},0)`}
		>
			<line y2={innerHeight} />
			<text style={{ textAnchor: "middle" }} dy='.71em' y={innerHeight + 3}>
				{tickFormat(tickVal)}
			</text>
		</g>
	));
};
