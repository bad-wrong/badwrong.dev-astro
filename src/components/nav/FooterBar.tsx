export default function FooterBar() {
  return (
    <footer className="flex flex-col lg:flex-row lg:items-baseline p-8 uppercase font-semibold tracking-widest space-y-8 md:space-y-6 lg:space-x-16">
      <nav className="grid grid-flow-row md:grid-flow-col md:auto-cols-min gap-x-16 gap-y-6">
        <a className="border-b-2" href="/about">
          About
        </a>
      </nav>
      <div className="grid grid-flow-row md:grid-flow-col md:auto-cols-max gap-x-16 gap-y-4">
        <span>
          © Bad<span className="mx-1">&</span>Wrong OÜ
        </span>
      </div>
    </footer>
  );
}
