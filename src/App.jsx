import Random from './components/Random';
import Tag from './components/Tag'

export default function App() {
  
  return(
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
        <h1 className="bg-black text-white rounded-2xl w-11/12 text-center mt-[40px] px-10 py-2 text-4xl  font-bold">RANDOM GIF</h1>     
        <div className="flex w-full flex-col  items-center gap-10 mt-[30px]">
          <Random/>
          <Tag/>
        </div> 
    </div>
  );
}