import styled from 'styled-components'
import React from 'react'

export const StyledDataBlock = styled.form`
display: block;
position: absolute;
width: 300px;
right: 0px;
top: 0px;
background-color: lightgrey;
margin: 0;
padding-top: 5px;
padding-bottom: 10px;
`;

export const DataBar = ({id, type, defaultValue, readonly, onChangeProp, ...props}) => {
  if (readonly) {
    return (
      <>
        <Label>{id}</Label>
        <StyledInput id={id} type={type} readOnly="readonly"
          defaultValue={defaultValue} onChange={onChangeProp} />
      </>
    )
  } else {
    return (
      <>
        <Label>{id}</Label>
        <StyledInput id={id} type={type} defaultValue={defaultValue} />
      </>
    )
  }
};

const Label = styled.p`
margin: 0 0 0 15px;
`;

const StyledInput = styled.input`
border-radius: 5px;
padding: 5px;
margin: 0 0 0 15px;
&:read-only {
  background-color: #e0e0e0;
}
`;

export const CloseDataBlock = styled.button`
position: absolute;
width: 70px;
top: 5px;
right: 5px;
`;

export const EditButton = styled.button`
position: absolute;
width: 70px;
top: 35px;
right: 5px;
`;

export const SaveButton = styled.button`
position: absolute;
width: 70px;
top: 35px;
right: 5px;
`;

export const ContactDataBG = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 100%;
`;

export const AddressBar = styled.div`
padding-left: 10px;
`;