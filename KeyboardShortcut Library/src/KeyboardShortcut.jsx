import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import keypress from 'keypress.js';
import { Listener } from "keypress.js";
import { simple_combo } from 'keypress.js';
import { shortcutContext } from './KeyboardShortcutProvider';

const KeyboardShortcut = ({ combo, callback, description }) => {
  const { registerShortcut, unregisterShortcut } = useContext(shortcutContext);

  useEffect(() => {
    const listener = new keypress.Listener();
    const keys = combo.split(' ');
    const id = listener.simple_combo(keys, callback);

    registerShortcut(combo, callback, description);

    return () => {
      listener.unregister_combo(id);
      unregisterShortcut(id);
    };
  }, []);

  return null;
};


export default KeyboardShortcut;