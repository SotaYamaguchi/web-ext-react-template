import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import browser from 'webextension-polyfill';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Title = styled.h1((props) => {
  const { theme } = props;
  return {
    ...theme.typography.h1,
    textAlign: 'center',
    color: theme.palette.text.primary,
  };
});

const Wrapper = styled.section((props) => {
  const { theme } = props;
  return {
    padding: '4em',
    textAlign: 'center',
    background: theme.palette.background.primary,
  };
});

const Button = styled.button((props) => {
  const { theme } = props;
  return {
    color: theme.palette.text.secondary,
  };
});

const CustomButton: FC<ButtonProps> = (props) => {
  const { onClick } = props;
  return <Button onClick={onClick}>Button</Button>;
};

export const Popup: FC = () => {
  const handleClick = () => {
    browser.tabs.create({ url: 'https://example.com/' });
  };

  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <CustomButton onClick={handleClick}>Button</CustomButton>
    </Wrapper>
  );
};
