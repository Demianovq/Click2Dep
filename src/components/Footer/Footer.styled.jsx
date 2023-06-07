import styled from 'styled-components';

export const FooterBlock = styled('div')`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
`;

export const FooterTitle = styled('p')`
  font-weight: 500;
  font-size: 19px;
  line-height: calc(60 / 44);

  display: block;
  font-family: 'Libre Baskerville', sans-serif;
`;

export const LinkForDocs = styled('a')`
  font-size: 16px;

  font-family: 'Libre Baskerville', sans-serif;
  text-decoration: none;
  color: white;
  text-align: center;
  display: flex;
  gap: 10px;

  align-items: center;
`;

export const SocialTitle = styled('p')`
  font-weight: 500;
  font-size: 25px;
  line-height: calc(60 / 44);

  display: block;
  font-family: 'Libre Baskerville', sans-serif;
`;

export const SocialBlock = styled('div')`
  display: flex;
  gap: 30px;
  margin-left: auto;
  align-items: center;
`;

export const MailToBlock = styled('div')`
  align-items: center;
  background-color: #0793fa;
  padding: 5px 10px;
  border-radius: 20px;
`;

export const BlockOfDocs = styled('div')`
  display: flex;
  gap: 30px;
  padding-bottom: 50px;
  justify-content: center;
`;
