import React, { useContext } from 'react';
import { shortcutContext } from './KeyboardShortcutProvider';


const ActiveShortcuts = () => {
  const { getActiveShortcuts } = useContext(shortcutContext);

  return (
    <div>
      
      <ul>
        {getActiveShortcuts().map(({ combo, description }) => (
          <li key={combo}>
            {combo} - {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveShortcuts;