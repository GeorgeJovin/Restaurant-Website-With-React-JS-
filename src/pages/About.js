import React from 'react';
import Layout from '../components/Layout';
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To George Restaurant</Typography>
        <p>
        Welcome to George Restaurant! We are a vibrant and inviting restaurant that aims to create memorable dining experiences for our guests. Nestled in the heart of coimbatore, we pride ourselves on offering a unique fusion of flavors and a warm, welcoming ambiance.
        At George Restaurant, we believe that good food is at the core of any great dining experience. Our passionate team of skilled chefs meticulously crafts each dish, using only the freshest ingredients sourced from local farmers and suppliers.
        From mouthwatering appetizers to decadent desserts, our menu showcases a range of culinary delights that are sure to satisfy even the most discerning palate.ut it's not just about the food at George Restaurtent it's about the entire dining experience. 
        Our attentive and friendly staff is dedicated to providing exceptional service, ensuring that every visit to our restaurant is nothing short of extraordinary. Whether you're joining us for a romantic dinner for two or a lively gathering with friends and family, 
        we strive to create an atmosphere where you can relax, indulge, and create lasting memories.
        </p>
        <br />
        <p>
        Our stylish and contemporary decor sets the stage for an enjoyable dining experience. The cozy lighting, comfortable seating, and tasteful artwork all contribute to the inviting ambiance that we take pride in.
        We have carefully curated every detail to provide you with an environment that is both visually appealing and conducive to conversation and connection.
        In addition to our regular menu, we also offer seasonal specials and curated wine pairings to elevate your dining experience. We are committed to accommodating dietary preferences and allergies, ensuring that everyone can enjoy their meal without compromise.
        Whether you're a vegetarian, vegan, or have specific dietary restrictions, our chefs are more than happy to accommodate your needs.
        </p>
      </Box>
    </Layout>
  );
};

export default About;