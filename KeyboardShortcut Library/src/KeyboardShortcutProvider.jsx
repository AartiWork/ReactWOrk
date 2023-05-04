import React, { createContext, useState } from 'react';
import KeyPress from 'keypress.js';

export const shortcutContext = createContext([]);

const KeyboardShortcutProvider = ({ children }) => {
  const [shortcuts, setShortcuts] = useState([]);

  const registerShortcut = (combo, callback, description) => {
    const listener = new KeyPress.Listener();
    const keys = combo.split(' ');
    const id = listener.simple_combo(keys, callback);
    setShortcuts([...shortcuts, { id, combo, description }]);
  };

  const unregisterShortcut = (id) => {
    const listener = KeyPress.getListener();
    listener.unregister_combo(id);
    setShortcuts(shortcuts.filter((shortcut) => shortcut.id !== id));
  };

   const getActiveShortcuts = () => {
    return shortcuts.map(({ combo, description }) => ({ combo, description }));
  };

  return (
    <shortcutContext.Provider value={{ shortcuts, registerShortcut, getActiveShortcuts, unregisterShortcut }}>
      {children}
    </shortcutContext.Provider>
  );
};


export default KeyboardShortcutProvider;