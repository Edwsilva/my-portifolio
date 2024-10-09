import { Container, styled, Typography } from "@mui/material";
import { useState } from "react";
import Avatar from "../../../../assets/images/avatar1.jpeg";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>
          {/* <Grid container spacing={2}>
          <Grid item xs={4}>
          <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={8}>
            <Typography color="primary" variant='h1'>
                Edwilson da Silva
            </Typography>
            <Typography color="primary" variant='h2' >
                I`m front-end developer 
            </Typography>
          </Grid>
        </Grid> */}

          <Grid container spacing={2}>
            <Grid size={4}>
              <Item>size=8</Item>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid size={8}>
              <Item>size=4</Item>
              <Typography color="primary" variant="h1">
                Edwilson da Silva
              </Typography>
              <Typography color="primary" variant="h2">
                I`m front-end developer
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
