import React from 'react';
import { Typography, Container } from '@material-ui/core';

function Footer() {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          My Footer Content © {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;