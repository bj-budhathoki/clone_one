import { Box, Grid, Heading, Text } from '@chakra-ui/layout'
import { Title } from '@/components/Title/Title'
import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

const StyledImage=styled(Image)`
 transition: transform .5s ease;
 cursor:pointer;
&:hover{
    transform:scale(1.5);
}
`
export const Blog = () => {
    return (
        <Box>
        <Box display="flex" justifyContent="center">
          <Box width="fit-content">
          <Title text="our blog"/>
          </Box>
          </Box>
          <Box my="3rem">
          <Grid templateColumns="repeat(auto-fit, minmax(300px,1fr))" gap={6}>
            {[1,2,3].map(val=><Box key={val}>
                <Box position="relative" overflow="hidden">
           <StyledImage
            height={250}
            width={400}
            src="/assets/images/blog-1.jpg"
            layout="responsive"
            objectFit="cover"
           />
           </Box>
           <Box   textAlign="center">
             <Box
                position="relative"
                z-index="99"
                width={300}
                max-width="100%"
                marginTop="-69px"
                marginLeft="auto"
                marginRight="auto"
                padding="20px 44px"
                background= "#fff"
        >
             <Heading as="h4" size="md" >A guide to latest trends</Heading>
               <Text mt={4} fontSize="lg" color="gray.400">By admin</Text>
             </Box>
           </Box>

            </Box>)}
          </Grid>

          </Box>
          </Box>
    )
}
