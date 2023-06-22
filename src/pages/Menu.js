import React from 'react';
import { useState,useEffect } from 'react';
import { Data } from '../components/data';
import { Box, Card, CardActionArea, CardContent, Typography, CardMedia, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addItem = (data) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === data.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...data, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    setCart(storedCart || []);
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Data.map((item, index) => (
          <Card sx={{ maxWidth: '390px', display: 'flex', m: 2 }} key={index}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component="img"
                src={item.image}
                alt={item.name}
                menu={item}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {item.name} - ₹{item.price} <br />
                  <Button
                    onClick={() => addItem(item)}
                    sx={{
                      '&:hover': {
                        color: 'white',
                        backgroundColor: 'black',
                      },
                    }}
                    variant="contained"
                  >
                    Add to Cart
                  </Button>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default Menu;
