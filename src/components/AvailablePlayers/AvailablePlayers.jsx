import React, { use } from 'react'

const AvailablePlayers = ({playerPromise}) => {
    const playerData=use(playerPromise);
    console.log(playerData);
  return (
    <div>
      available
    </div>
  )
}

export default AvailablePlayers
