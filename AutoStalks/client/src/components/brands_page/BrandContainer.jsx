export default function BrandContainer(props) {
  // this is used to hold all the inline css styles inside
  const containerStyles = {
    borderRadius: "10%",
    padding: "5% 5% 20%",
    height: "100%",
  };

  const brandImage = {
    height: "90%",
    borderRadius: "10%",
    objectFit: "cover",
  };

  const paraStyling = {
    marginTop: "5%",
    paddingBottom: "5%",
    textAlign: "center",
    fontWeight: "800",
    fontSize: "larger",
  };

  return (
    <a href={props.link} key={props.brandName}>
      <div
        class="transition duration-300 hover:scale-110 hover:bg-green-400 bg-[#fbf5eccc]"
        style={containerStyles}
      >
        <img src={props.image} style={brandImage} />
        <p style={paraStyling}>{props.brandName}</p>
      </div>
    </a>
  );
}
