import React from 'react';
import Header, { IProps } from './Header';

export default {
    title: 'atoms/header',
    component: Header,
};

export const Default = ({ title = "Join our IT platform to share ideas, exchange knowledge and build a team!" }: IProps) => (
    <Header title={title} />
);
