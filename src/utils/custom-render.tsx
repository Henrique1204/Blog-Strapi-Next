import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';

export const CustomRender = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
