import styled from "styled-components"

export const ContainerProduct = styled.div`
  height: 100vh;
  width: 100%;
  background: "#f5f5f5";
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`

export const TitleContainer = styled.div`
  background: "#ffffff";
  margin-bottom: 50px;
  @media screen and (max-width: 960px) {
    margin-bottom: 30px;
  }
`
export const Title = styled.h1`
  color: #000000;
  font-size: 40px;
  margin-top: 10px;
`
export const BoxContainer = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  justify-content: center;
  background: "#12ff88";
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`

export const AppIcon = styled.div`
  width: 35%;
  height: 50vh;
  margin-right: 40px;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 300px;
    height: 300px;
    margin-right: 0px;
  }
`

export const RigthContainer = styled.div`
  width: 35%;
  height: 50vh;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: fit-content;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`

export const AppName = styled.h2`
  color: #000000;
  font-size: 60px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
  }
`

export const AppDescription = styled.p`
  margin-top: 8px;
  color: #000000;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (max-width: 960px) {
    margin-inline: 50px;
    height: fit-content;
  }
`

export const PlayStoreButton = styled.button`
  border-radius: 4px;
  height: 70px;
  width: 150px;
  font-size: x-large;
  color: #000;
  outline: none;
  border: 2px solid black;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    height: 50px;
    font-size: large;
  }
`
