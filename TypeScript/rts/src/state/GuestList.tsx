import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setNmae] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setNmae('');
    setGuests([...guests, name]);
  }

  return <div>
    <h3>Guest List</h3>
    <ul>
      {guests.map(guest => <li>{guest}</li>)}
    </ul>  
    <input value={name} onChange={(e) => setNmae(e.target.value)} />
    <button onClick={onClick}>Add Guest</button>
  </div>;
};

export default GuestList