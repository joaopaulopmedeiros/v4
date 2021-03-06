import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">Contato</h2>

      <h2 className="title">Vamos nos conectar?</h2>

      <p>
        Estou à procura de aprender cada vez mais com devs seniores e ajudar os juniores. Se você
        quer conversar comigo para aprendermos juntos, fique à vontade e entre contato comigo. Se
        você quer contratar algum serviço, cá estou para te ajudar. Sejam todos bem-vindos!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Olá, João!
      </a>
    </StyledContactSection>
  );
};

export default Contact;
