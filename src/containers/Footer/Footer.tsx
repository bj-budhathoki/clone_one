import { Box, Container } from '@chakra-ui/layout'
import React from 'react'
export const Footer = () => {
    return (
       <Box background="gray.100" py="1rem">
           <Container maxW="container.xl">
            @{new Date().getFullYear()} Clone
           </Container>
       </Box>
    )
}
