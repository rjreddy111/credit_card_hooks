// Write your code here
import {useState} from 'react'

import {
  Mainbackground,
  LeftContainer,
  UnderLine,
  CardContainer,
  RightContainer,
  RightmainConstiner,
  InputTextValues,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardnumber] = useState('')

  const [cardName, setCardname] = useState('')

  const onChangenumber = event => {
    setCardnumber(event.target.value)
  }

  const onChangeName = event => {
    setCardname(event.target.value)
  }

  return (
    <Mainbackground>
      <LeftContainer>
        <div>
          <h1>CREDIT CARD</h1>

          <UnderLine />
        </div>
        <CardContainer data-testid="creditCard">
          <p>{cardNumber}</p>
          <p>CARDHOLDER NAME</p>
          <p>{cardName}</p>
        </CardContainer>
      </LeftContainer>
      <RightmainConstiner>
        <RightContainer>
          <h3>Payment Method</h3>
          <InputTextValues
            type="text"
            placeholder="Card Number"
            onChange={onChangenumber}
            value={cardNumber}
          />
          <br />
          <br />
          <InputTextValues
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </RightContainer>
      </RightmainConstiner>
    </Mainbackground>
  )
}

export default CreditCard
