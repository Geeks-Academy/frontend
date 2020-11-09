import React from 'react';

export interface IMultiStepForm {
  onSubmit: (e: Record<string, string | number>) => void;
  children: React.ReactNode[];
  store: string;
}
