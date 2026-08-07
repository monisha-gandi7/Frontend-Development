import react from "react"; 
import ChildOfC1 from "./ChildOfC1"; 

function Component1() {
  return (
    <div>
      <h1>Component 1</h1>
      <ChildOfC1 />
      <p>This is the first component.</p>
    </div>
  );
}

export default Component1;