function Header() {
  return (
    <>
      <header className="bg-black text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Music</div>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">
              Premium
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
            <a href="#" className="hover:underline">
              Download
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
