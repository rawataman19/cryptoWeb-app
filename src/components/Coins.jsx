import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from '../index';
import { Button, Container, HStack, RadioGroup} from '@chakra-ui/react';
import Loader from './Loader';
import { Radio } from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';
import CoinsCard from './CoinsCard';
const Coins = () => {

  const[coins,setCoins] =useState([]);
  const[loading,setloading] =useState(true);
  const[error, setError]= useState(false);
  const[page,setPage] =useState(0);
  const [currency,setCurrency] =useState("inr");
  const currencySymbol=currency==="inr"? "₹" : currency==="eur" ? "€": "$";

  const changePage =(page) =>{
    setPage(page)
    setloading(true)
  }

  const btns = new Array(132).fill(1)
 
  useEffect(()=>{
        const fetchCoins = async()=>{
          try{
            const {data}=  await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
          setCoins(data)
          setloading(false)
          }
          catch(error){
            // setError(true)
            // setloading(false)
          }
        };
        
        fetchCoins();
    },[currency,page]);

    if(error){
      return <ErrorComponent message={"Error while fetching coins "}/>
    }
    return (
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"} >

            <Radio value={"inr"}>₹ INR</Radio>
            <Radio value={"eur"}>€ EURO</Radio>
            <Radio value={"usd"}>$ DOLLAR</Radio>
            </HStack>
          </RadioGroup>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((crypto) => (
                <CoinsCard
                  id={crypto.id}
                  name={crypto.name}
                  symbol={crypto.symbol}
                  img={crypto.image}
                  price={crypto.current_price}
                  url={crypto.url}
                  currencySymbol={currencySymbol}
                />
              ))}
            </HStack>
            <HStack  overflowx={"hidden"} p={"8"}>
              {btns.map((items, idx) => (
                <Button
                  key={idx}  // Add a key prop to each button to avoid React warnings
                  bgColor={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changePage(idx+1)}
                >
                  {idx + 1}
                </Button>
              ))}
            </HStack>
          </>
        )}
      </Container>
    );
}  
export default Coins