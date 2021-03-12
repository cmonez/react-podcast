import React, { useState, useEffect } from 'react';
import exampleData from '../example.js';
import styled from 'styled-components';

let FooterDiv = styled.div`
  position: absolute;
  float: right;
  color: white;
`;

const Footer = () => {
  return (
    <FooterDiv>
      Made with ❤️ by{' '}
      <a href="https://github.com/cmonez" target="_blank">
        cmonez
      </a>
    </FooterDiv>
  );
};
export default Footer;
