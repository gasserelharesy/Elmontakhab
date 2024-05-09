import { useState } from "react";

function Request(props) {
  const [claimStatus, setClaimStatus] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleOnClaim = () => {
    setClaimStatus(!claimStatus);
    props.onClaim(); // Call the function passed from the parent

  };

  return (
    <>
      <h2>{props.type}</h2>
      <p>{props.description}</p>
      <ul>
        {props.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <button onClick={handleOnClaim}>
        {claimStatus ? "Claimed!" : "Claim"}
      </button>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        <option value={1}>Quantity x1</option>
        <option value={2}>Quantity x2</option>
        <option value={3}>Quantity x3</option>
        <option value={4}>Quantity x4</option>
        <option value={5}>Quantity x5</option>
        <option value={6}>Quantity x6</option>
      </select>
    </>
  );
}

export default Request;