// write the component code here
import React from 'react'

const usercard = () => {
    let name = "harry";
    let  profilePhoto = 'https://source.unsplash.com/300x300/?person'
    let mail = "nishatayub702@gmail.com"
    let phoneNumber = 8709474765
    let address = "Jalandhar"
  return (
    <div>
        <img src={profilePhoto} alt="pp" />
      <p>{`Hello, my name is ${name}`}</p>
      <p>{`Hello, my mail is ${mail}`}</p>
      <p>{`Hello, my phone number is ${phoneNumber}`}</p>
      <p>{`Hello, my address is ${address}`}</p>
    </div>
  )
}

export default usercard
