/**@jsx jsx */
import { jsx, Flex, Grid, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
//import { css, jsx } from '@emotion/core'
import flag from './assets/Header/hackclubflag.png'

/***
 * Header of the website
 */

export default ({}) => {
  return (
    <Box
      columns={[2, 2, 3, 3]}
      sx={{
        width: '100%',
        background: `linear-gradient(90.37deg, #5BC0DE 1.92%, #338EDA 78.03%)`,
        display: 'fixed',
        zIndex: 1000,
        minHeight: '70px',
        opacity: '0.97',
        borderBottom: '1px solid rgba(48, 48, 48, 0.125)',
      }}>
      <Flex sx={{ width: '100%' }}>
        <img
          src={flag}
          sx={{
            width: '120px',
            position: 'absolute',
            ml: [2, 4, 5],
          }}
        />
        <Flex
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            h3: {
              mx: 3,
              fontSize: '20px',
              display: ['none', 'none', 'initial'],
              ':hover': {
                cursor: 'pointer',
              },
            },
          }}>
          <h3 sx={{ color: 'white', fontWeight: 'normal' }}>Home</h3>
          <h3 sx={{ color: 'white', fontWeight: 'normal' }}>Team</h3>
          <h3 sx={{ color: 'white', fontWeight: 'normal' }}>Installation</h3>
          <h3 sx={{ color: 'white', fontWeight: 'normal' }}>Github</h3>
          <h3 sx={{ color: 'white', fontWeight: 'normal' }}>FAQ</h3>
        </Flex>
      </Flex>
    </Box>
  )
}
