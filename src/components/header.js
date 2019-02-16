import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: ${props => props.theme.headerHeight};
  display: 'flex';
  align-items: 'center';
  padding: '0 32px';
  background-color: '#5A3FBF';
`;

const HeaderContent = styled.div`
  padding: 28px 32px;

  a {
    display: flex;
    align-items: center;
  }
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;

  img {
    border-radius: 100%;
  }
`;

const Name = styled.h1`
  margin: 0 0 0 24px;
  font-family: ${props => props.theme.fontBase};
  font-size: 0.9rem;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

const Header = ({ siteTitle, avatar }) => (
  <StyledHeader>
    <HeaderContent>
      <Link
        to="/"
        style={{
          color: `rgba(0, 0, 0, 0.87)`,
          textDecoration: `none`,
        }}
      >
        <Avatar>
          <Img fluid={avatar} />
        </Avatar>
        <Name>Saveliy Leukhin</Name>
      </Link>
    </HeaderContent>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
