
import PostX from './card';
import { NavTopic } from './nav';
const Main = () => {
  return (
    <div className='w-full h-full '>
  
      <main className='flex w-full flex-wrap'>
<PostX/>
<PostX/>
<PostX/>
<PostX/>
<PostX/>
      </main>
    </div>
  )
}

export default Main

// { Array.from({ length: 5 }, () => (
//     <Star fill="#111" strokeWidth={0} />
// ))}