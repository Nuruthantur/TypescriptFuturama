const AboutMe = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}>
      <h1>This is the about me page</h1>
      <img
        src="https://cataas.com/cat/says/hello"
        alt="picture of a cat saying 'hello' "
        height={500}
      />
    </div>
  );
};

export default AboutMe;
