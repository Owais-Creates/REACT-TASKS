import Card from "./Card"

function Cards({users,handleRemove}) {
  return (
   <>
    <div className="w-full max-h-96 overflow-auto p-16 flex justify-center gap-4 flex-wrap " >
      {users.map((item,index) => {
        return <Card id={index} handleRemove={handleRemove} key={index} user={item} />
      })}
    </div>
   </>
  )
}

export default Cards
 