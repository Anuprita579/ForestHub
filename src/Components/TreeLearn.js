import React, { useState } from 'react';

const Leaf = ({ id, message, isActive, onClick }) => {
  const leafStyles = {
    cursor: 'pointer',
    margin: '10px',
    padding: '10px',
    border: '1px solid #000',
    backgroundColor: isActive ? '#e6f7ff' : 'transparent',
  };

  return (
    <div style={leafStyles} onClick={() => onClick(id)}>
      {isActive && <p>{message}</p>}
    </div>
  );
};

const Branch = ({ children }) => {
  const branchStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  };

  const branchLineStyles = {
    position: 'absolute',
    top: 0,
    left: '50%',
    borderLeft: '1px solid #ccc',
    height: '100%',
    transform: 'translateX(-50%)',
  };

  return (
    <div style={branchStyles}>
      {children}
      <div style={branchLineStyles}></div>
    </div>
  );
};

const TreeLearn = () => {
  const [activeLeaf, setActiveLeaf] = useState(null);

  const branches = [
    {
      id: 1,
      leaves: [
        { id: 2, message: 'Message 2' },
        { id: 3, message: 'Message 3' },
        { id: 4, message: 'Message 4' },
      ],
    },
    {
      id: 5,
      leaves: [
        { id: 6, message: 'Message 6' },
        { id: 7, message: 'Message 7' },
      ],
    },
    {
      id: 8,
      leaves: [
        { id: 9, message: 'Message 9' },
        { id: 10, message: 'Message 10' },
      ],
    },
    { id: 11, leaves: [{ id: 12, message: 'Message 12' }] },
  ];

  const handleLeafClick = (leafId) => {
    setActiveLeaf(leafId);
  };

  return (
    <div className="flex justify-center">
      {branches.map((branch) => (
        <Branch key={branch.id}>
          {branch.leaves.map((leaf) => (
            <Leaf
              key={leaf.id}
              id={leaf.id}
              message={leaf.message}
              isActive={activeLeaf === leaf.id}
              onClick={handleLeafClick}
            />
          ))}
        </Branch>
      ))}
    </div>
  );
};

export default TreeLearn;
