function Person({ person }) {
  // Destructuring props
  const { name, nickName, images } = person;
  const img = images[0].small.url;

  // Returned JSX
  return (
    <li>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50px 125px",
          textAlign: "left",
          gap: "20px",
          maxWidth: "195px",
          margin: "0 auto",
        }}
      >
        <div>
          {images && <img src={img} width="50" height="50" alt="" title="" />}
        </div>
        <div>
          <div>Name: {name}</div>
          <div>Nickname: {nickName || "N/A"}</div>
        </div>
      </div>
    </li>
  );
}

export default Person;
