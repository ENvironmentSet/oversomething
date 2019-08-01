import 'typeface-montserrat';
import 'typeface-merriweather';
import 'prismjs/themes/prism-okaidia.css';

import React from 'react';

import AppEnvironment from 'components/templates/AppEnvironment';

export function wrapPageElement({ element }) {
  return (
    <AppEnvironment>
      {element}
    </AppEnvironment>
  );
}