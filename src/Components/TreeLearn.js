import React, { useState } from 'react';

const Leaf = ({ id, message, isActive, onClick }) => {
  const leafStyles = {
    cursor: 'pointer',
    margin: '10px',
    padding: '10px',
    border: '1px solid green',
    borderBottomRightRadius: '20px',
    borderTopLeftRadius: '10px',
    backgroundColor: isActive ? 'green' : 'green',
    color: isActive? 'white': 'transparent'
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

  

  return (
    <div style={branchStyles}>
      {children}
    </div>
  );
};

const TreeLearn = () => {
  const [activeLeaf, setActiveLeaf] = useState(null);

  const branches = [
    {
      id: 1,
      leaves: [
        { id: 2, message: 'Biodiversity' },
        { id: 3, message: 'Oxygen' },
        { id: 4, message: 'Climate' },
      ],
    },
    {
      id: 5,
      leaves: [
        { id: 6, message: 'Erosion' },
        { id: 7, message: 'Watershed' },
      ],
    },
    {
      id: 8,
      leaves: [
        { id: 9, message: 'Habitat' },
        { id: 10, message: 'Medicine' },
      ],
    },
    { id: 11, leaves: [{ id: 12, message: 'Food' }] },
  ];

  const handleLeafClick = (leafId) => {
    setActiveLeaf(leafId);
  };

  return (
    <div className="flex justify-center">
      {branches.map((branch) => (
        <Branch key={branch.id}>
          {branch.leaves.map((leaf) => (
            <Leaf key={leaf.id} id={leaf.id} message={leaf.message} isActive={activeLeaf === leaf.id} onClick={handleLeafClick}/>
          ))}
        </Branch>
      ))}
    </div>
  );
};

export default TreeLearn;
