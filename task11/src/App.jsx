import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {

  const data = [
    {
      name: "kallu",
      added: false
    },
    {
      name: "ballu",
      added: false
    },
    {
      name: "suarli",
      added: false
    },

  ]

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added }
        return item
      });
    });
  };

  return (
    <>
      <Navbar data={songData} />
      <div style={{ backgroundColor: "beige", height: "100vh", display: "flex", flexWrap: "wrap", gap: "5px" }} >

        {songData && songData.map((item, i) => {
          return <Card key={i} index={i} data={item} handleClick={handleClick} />
        })}

      </div>
    </>
  )

}

export default App