import Card from "./Card"

function Cards({users}) {
  return (
   <>
    <div className="w-full max-h-96 overflow-auto p-16 flex justify-center gap-4 flex-wrap " >
      {users.map((item,index) => {
        return <Card key={index} user={item} />
      })}
    </div>
   </>
  )
}

export default Cards
 