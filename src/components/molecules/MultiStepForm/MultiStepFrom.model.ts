import React from 'react';

export interface IMultiStepFrom {
  onSubmit: (e: Record<string, string | number>) => void;
  children: React.ReactNode[];
  store: string;
}
