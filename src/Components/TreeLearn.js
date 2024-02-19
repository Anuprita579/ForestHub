import React from 'react';

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

const TreeLearn = ({ onLeafClick, activeLeaf }) => {

  const branches = [
    {
      id: 1,
      leaves: [
        { id: 2, message: 'Biodiversity', description:"Biodiversity or biological diversity is the variety and variability of life on Earth. Biodiversity is a measure of variation at the genetic, species, and ecosystem level." },
        { id: 3, message: 'Oxygen', description:"Oxygen is a chemical element; it has symbol O and atomic number 8. It is a member of the chalcogen group in the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds." },
        { id: 4, message: 'Climate', description:"Climate is the long-term weather pattern in a region, typically averaged over 30 years. More rigorously, it is the mean and variability of meteorological variables over a time spanning from months to millions of years." },
      ],
    },
    {
      id: 5,
      leaves: [
        { id: 6, message: 'Erosion', description:"Erosion is the action of surface processes that removes soil, rock, or dissolved material from one location on the Earth's crust and then transports it to another location where it is deposited. Erosion is distinct from weathering which involves no movement." },
        { id: 7, message: 'Watershed', description:"A watershed is an area of land where all flowing surface water converges to a single point, such as a river mouth, or flows into another body of water, such as a lake or ocean. " },
      ],
    },
    {
      id: 8,
      leaves: [
        { id: 9, message: 'Habitat', description:"In ecology, habitat refers to the array of resources, physical and biotic factors that are present in an area, such as to support the survival and reproduction of a particular species. A species habitat can be seen as the physical manifestation of its ecological niche." },
        { id: 10, message: 'Medicine', description:"Medicine is the science and practice of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health. " },
      ],
    },
    { id: 11, leaves: [{ id: 12, message: 'Food', description:"Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals." }] },
  ];

  const handleLeafClick = (leafId, description) => {
    onLeafClick(leafId, description);
  };

  return (
    <div>
      <div className="flex justify-center">
        {branches.map((branch) => (
          <Branch key={branch.id}>
            {branch.leaves.map((leaf) => (
              <Leaf key={leaf.id} id={leaf.id} message={leaf.message} isActive={activeLeaf === leaf.id} onClick={() => handleLeafClick(leaf.id, leaf.description)}/>
            ))}
          </Branch>
        ))}
      </div>
    </div>
  );
};

export default TreeLearn;
