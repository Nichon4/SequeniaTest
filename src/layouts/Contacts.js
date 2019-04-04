import React from 'react'
import styled from 'styled-components'

export const Contact = ({data, onClick}) => {
  let {id,name} = data;
  return (
    <div >
      <StyledLi key={id} onClick={onClick}>
        {name}
      </StyledLi>
    </div>
  )
};

const StyledLi = styled.li`
text-align: left;
display: inline-block;
width: 250px;
border-radius: 5px;
background-color: darkgrey;
padding: 5px;
margin: 5px;
`;

export const StyledContactList = styled.ul`

 display: flex;
  flex-wrap: wrap;
  justify-content: ${ ( window.innerWidth > 827) ? 'space-between' : 'left' } ;
margin: 0;
padding: 0;
`;