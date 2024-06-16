import Navbar from "../components/common_components/Navbar";
import Branding from "../components/index_page/Branding";
import Download from "../components/index_page/Download";

export default function MainPage() {
  return (
    <>
      <body className="bg-gradient-to-r from-black from-10% via-gray-500 via-50% to-black to-90%">
        <Navbar />
        <Branding />
        <Download />
      </body>
    </>
  );
}
