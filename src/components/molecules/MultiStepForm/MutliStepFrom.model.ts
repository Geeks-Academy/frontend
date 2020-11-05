import React from 'react';

export interface IMultiStepFrom {
  children: React.ReactNode;
  onSubmit?: () => void;
}
