import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setNmae] = useState('');
  
  return <div>
    <h3>Guest List</h3>

    <input value={name} onChange={(e) => setNmae(e.target.value)} />
    <button>Add Guest</button>
  </div>;
};

export default GuestList