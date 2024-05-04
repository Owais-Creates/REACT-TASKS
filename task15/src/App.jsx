import React, { useState } from 'react'
import UseState from './Components/UseState'
import Array from './Components/Array'
import Bmi from './Components/Bmi'
import Counter from './Components/Counter'
import Quiz from './Components/Quiz'
import Select from './Components/Select'
import AddFriends from './Components/AddFriends'
import Music from './Components/Music'
import Navbar from './Components/Navbar'
import StopWatch from './Components/StopWatch'
import Password from './Components/Password'
import RandomNumber from './Components/RandomNumber'
import FormHandling from './Components/FormHandling'

function App() {


  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-400'>
      <StopWatch />
    </div>
  )

}



export default App

// const dummyData = [
//   {
//     name: "Atif aslam",
//     song: "Dil se",
//     image: "https://static.toiimg.com/thumb/msid-80172462,width-400,resizemode-4/80172462.jpg",
//     isFavourite: false
//   },
//   {
//     name: "Gian",
//     song: "Kaan Phaad",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81S6C2fykuPPLBwltGt30xNf9jGkBVE95wro1aKmGjA&s",
//     isFavourite: false
//   },
//   {
//     name: "Doraemon",
//     song: "Robotics",
//     image: "https://p1.hiclipart.com/preview/975/20/895/doraemon-1-singing-doraemon-clip-art-png-clipart.jpg",
//     isFavourite: false
//   },
//   {
//     name: "Dhinchak pooja",
//     song: "Nahi sunna",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGxKybEUHfmHygRej-ZfaXPpgHRNO3GT-7OaDx2lAOQ&s",
//     isFavourite: false
//   },

// ]

// const [data, setData] = useState(dummyData);

// const handleClick = (dataIndex) => {

//   setData(prev => {
//     return prev.map((item, index) => {
//       if (index === dataIndex) { return { ...item, isFavourite: !item.isFavourite } }
//       return item;
//     })

//   })

// };




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
