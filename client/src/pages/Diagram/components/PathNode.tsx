import React, {useCallback} from 'react';
import {Handle, Position} from 'reactflow';

const handleStyle = {left: 11};
const handleStyle2 = {left: 42};
const handleStyle3 = {left: 73};
const handleStyle4 = {left: 104};
const handleStyle5 = {left: 135};

function PathNode({data, isConnectable}) {
  return (
    <div className='text-updater-node'>
      <Handle
        type='target'
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div
        style={{
          height: '2.125rem',
          width: '9em',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {data.label}
      </div>
      <Handle
        type='source'
        position={Position.Bottom}
        id='a'
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='b'
        style={handleStyle2}
        isConnectable={isConnectable}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='c'
        style={handleStyle3}
        isConnectable={isConnectable}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='d'
        style={handleStyle4}
        isConnectable={isConnectable}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='e'
        style={handleStyle5}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default PathNode;
