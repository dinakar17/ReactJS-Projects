import "./header.css";

const Header = () => {
  return (
    <header className="absolute left-0 right-0 flex justify-center gap-2 content-center z-[2000]">
      <img
        src="https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg"
        alt="Idea"
        className="rounded-full object-cover w-8 h-8 lg:w-16 lg:h-16 ml-2 self-center"
      />
      <h2 className="font-[Gentium_Basic] text-4xl text-center lg:text-left lg:text-6xl font-bold">Create your Own Ideas</h2>
    </header>
  );
};

export default Header;
