// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`
export const MainHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-weight: bold;
`
export const Label1 = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
`
export const Input1 = styled.input`
  color: #7e858e;
  font-family: 'Open Sans';
  width: 300px;
  height: 33px;
  border-radius: 5px;
  margin-top: 8px;
  padding-left: 10px;
  margin-bottom: 25px;
`
export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionElement = styled.option`
  width: 2000px;
  height: 40px;
  border-radius: 5px;
  margin-top: 8px;
  display: none;
  padding-left: 10px;
  margin-bottom: 250px;
`
export const GenerateButton = styled.button`
  width: 150px;
  height: 33px;
  border-width: 0px;
  border-radius: 5px;
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  margin-top: 10px;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.isImage});
  padding-right: 20px;
  background-size: cover;
  height: 300px;
  width: 380px;
  margin-left: 50px;
  margin-top: 50px;
  display: flex;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const ImageContainer1 = styled.div`
  background-image: url(${props => props.isImage});

  background-size: cover;
  height: 270px;
  width: 95%;
  margin-top: 50px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const Text = styled.p`
  color: #ffffff;
  font-family: 'open sans';
  width: 250px;
  font-size: ${props => props.size}px;
`
export const SelectElement = styled.select`
  width: 300px;
  height: 33px;
  border-radius: 5px;
  margin-top: 8px;
  padding-left: 10px;
  margin-bottom: 25px;
`
