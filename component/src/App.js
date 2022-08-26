import './App.css';
import ClassComp from './Component/ClassComp';
import ClassProps from './Component/ClassProps';
import Click from './Component/Click';
import Counter from './Component/Counter';
import {FunctionComp,FunctionComp2} from './Component/FunctionComp';
import FunctionProps from './Component/FunctionProps';
// import ParentComp from './Component/ParentComp';
function App() {
  return (
   <div>
   <FunctionComp />
   <FunctionComp2 />
   <ClassComp />
   <Click />
   <Counter />
   <ClassProps name="Yogesh Kumar Karnwal"><p>Child Component</p></ClassProps>
   <ClassProps name="Ketan Kumar Karnwal" class="B.Tech(EE)"/>
   <ClassProps name="Akshay Kumar Karnwal" class="B.Tech(IT)"/>
   <ClassProps name="Anuj Kumar Karnwal" />
   <ClassProps name="Ankit Kumar Karnwal" />
   <ClassProps name="Aashish Kumar Karnwal" />
   <ClassProps name="Akhilesh Kumar Karnwal" />
   <FunctionProps name="Akky" class="B.Tech(IT)"/>
   </div>
  );
}

export default App;
