import React, { useState, useCallback } from "react";

export default ({ delay = 500 }) => {
  const [elements, setElements] = useState([{ text: "List item", id: 0, visible: true }]);
  const [lastElement, setLastElement] = useState(0);
  
  const handleClick = useCallback(() => {
    const newIndex = lastElement + 1;
    const newElement = { text: `List item`, id: newIndex, visible: false };
    const newElements = [...elements, newElement];

    setElements(newElements);
    setLastElement(newIndex);

    setTimeout(() => {
        setElements(newElements.map((element) => ({
            ...element,
            visible: true
        })));
    }, 100);
  }, [elements]);

  const handleRemove = useCallback((id) => {
    const newElements = elements.map((element) => ({
        ...element,
        visible: element.id === id ? false: element.visible
    }));

    setElements(newElements);

    setTimeout(() => {
        setElements(newElements.filter(({ id: _id}) => id !== _id));
    }, delay);
  });

  return (
    <div>
      <ul className="cool-list">
        {
            elements.map((element) => (
                <li className={`cool-list-item ${element.visible ? 'show' : ''}`} key={`cool-item-${element.id}`}>
                    {element.text} {element.id}
                    <button onClick={ () => handleRemove(element.id) }>X</button>
                </li>
            ))
        }
      </ul>
      <button onClick={ handleClick }>Add element</button>
    </div>
  );
};
