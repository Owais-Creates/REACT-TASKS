import React, { useState } from 'react'
import UseState from './Components/UseState'
import Array from './Components/Array'
import Bmi from './Components/Bmi'
import Counter from './Components/Counter'
import Quiz from './Components/Quiz'
import Select from './Components/Select'
import AddFriends from './Components/AddFriends'
import Music from './Components/Music'

function App() {

  return (
    <div>
      <Music />
    </div>
  )

}



export default App






//  <div>
//    const dummyData = [
//     {
//       name: "Owais",
//       profileImage: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       isFriend: false
//     },
//     {
//       name: "Raman",
//       profileImage: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       isFriend: false
//     },
//     {
//       name: "Savita",
//       profileImage: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       isFriend: false
//     }
//   ]

//   const [cardData, setCardData] = useState(dummyData);

//   const handleAddFriendButton = (itemIndex) => {

//     setCardData((prev) => (
//       prev.map((item, index) => {

//         if (index === itemIndex) { return { ...item, isFriend: !item.isFriend } }

//         return item;

//       })
//     ))

//   }

//   return (

//     <>
//       <div className='flex w-full h-screen bg-zinc-800 justify-center items-center gap-6' >
//         {cardData.map((item, index) => (
//           <AddFriends
//             key={index}
//             values={item}
//             handleClick={handleAddFriendButton}
//             index={index}
//           />
//         ))}

//       </div>
//     </>

//   )
// }
//  </div>
