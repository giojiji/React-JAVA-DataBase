export default function Display() {
  return (
    <div style={display}>
      <h1>
        Welcome guest, please login or register in order to make a reservation!
      </h1>
      <p>The best hotels all over the world!</p>
      <img
        src="https://img.freepik.com/premium-vector/cartoon-smiling-airplane-mascot-character_29190-6805.jpg"
        alt="plane"
      />
    </div>
  );
}

const display = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
