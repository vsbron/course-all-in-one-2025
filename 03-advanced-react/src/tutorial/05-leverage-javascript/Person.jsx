import avatar from "../../assets/default-avatar.svg";

function Person({ person }) {
  // Destructuring props
  const { name, nickName = "N/A", images } = person;
  const img = images?.at(0).small.url || avatar;

  // Returned JSX
  return (
    <li>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "75px 200px",
          textAlign: "left",
          alignItems: "center",
          gap: "20px",
          maxWidth: "270px",
          margin: "0 auto",
        }}
      >
        <img src={img} width="75" height="75" alt={name} title={name} />
        <div>
          <div>Name: {name}</div>
          <div>Nickname: {nickName}</div>
        </div>
      </div>
    </li>
  );
}

export default Person;
