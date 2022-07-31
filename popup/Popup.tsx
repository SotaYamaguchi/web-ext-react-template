import React from 'react';
import styled from 'styled-components';
import browser from 'webextension-polyfill';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Popup: React.VFC = () => {
  const handleClick = () => {
    browser.tabs.create({ url: 'https://example.com/' });
  };

  // a button to open example.com
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <button onClick={handleClick}>Button</button>
    </Wrapper>
  );
};
