import React from 'react';
import { DataForm } from '../../../redux/reducers/form';

export interface IMultiStepFrom {
  numberOfSteps: number;
  currentStep: number;
  summary: DataForm;
  children: React.ReactNode;
}
