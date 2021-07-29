import {
  ContainerProduct,
  TitleContainer,
  BoxContainer,
  AppDescription,
  AppIcon,
  AppName,
  Title,
  RigthContainer,
  PlayStoreButton,
} from "./productElement"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import React from "react"
import appIconSiFinance from "../../images/icon.png"
const Product = () => {
  return (
    <>
      <ContainerProduct>
        <TitleContainer>
          <Title>Our Product</Title>
        </TitleContainer>
        <BoxContainer>
          <AppIcon>
            <img src={appIconSiFinance} alt="Icon" width="300" height="300" />
          </AppIcon>
          <RigthContainer>
            <AppName>Si Finance</AppName>
            <AppDescription>
              Personal tracking finance app for your daily use, loan forecasting
              and multiple account.
            </AppDescription>
          </RigthContainer>
        </BoxContainer>
        <PlayStoreButton>
          <IoLogoGooglePlaystore />
          Play Store
        </PlayStoreButton>
      </ContainerProduct>
    </>
  )
}
export default Product
