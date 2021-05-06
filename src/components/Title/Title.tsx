import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'
export const Title = ({text}:{text:string}):JSX.Element => {
    return (

          <Heading
            as="h2"
            size="md"
            textTransform="uppercase"
            letterSpacing={2}
            position="relative"
            _before={{
              content: "''",
              background: 'gray.800',
              height: '2px',
              width: '80px',
              position: 'absolute',
              top: '50%',
              left: '-100px'
            }}
            _after={{
              content: "''",
              background: 'gray.800',
              height: '2px',
              width: '80px',
              position: 'absolute',
              bottom: '50%',
              right: '-100px'
            }}
          >
            {text}
          </Heading>
    )
}
