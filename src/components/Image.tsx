import {Leaf} from "../graphs/GraphNode";
import positioner from "../Positioner";
import './Image.css';

function Image(props: {leaf: Leaf, positioner: positioner, onClick: (nodeId: number) => void}) {
  const size = props.positioner.imageSize;
  const {leaf} = props;
  const {x, y} = props.positioner.getImageCoordinates(leaf.position);
  return <g onClick={
    () => {
      if ((leaf.value.speciesCount && leaf.value.speciesCount > 1) || leaf.value.id === -1) {
        props.onClick(props.leaf.id);
      }
    }
  }>
    <image href={props.leaf.value.url} width={size} height={size} x={x - size/2} y={y - size/2}/>
    {leaf.value.extinct ? <image href='/extinct.svg' width={size/4} height={size/4} x={x - size/2} y={y - size/2} /> : ''}
    <text x={x + size/2} y={y + size/2} className='num' textAnchor='end'>{props.leaf.value.speciesCount}</text>
    <title>{leaf.value.name}</title>
  </g>;
}

export default Image;
