const AboutMe = () => {
  return (
    <div
      style={{
        // 
          display:"grid", 
          placeItems:"center"
        // display: "flex",
        // flexFlow: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <h1>This is the about me page</h1>
      <img
        src="https://cataas.com/cat/says/hello"
        alt="picture of a cat saying 'hello' "
      />
    </div>
  );
};

export default AboutMe;
