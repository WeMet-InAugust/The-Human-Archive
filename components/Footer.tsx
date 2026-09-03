export default function Footer(){
  return (
    <footer className="border-t border-stone/10 text-sm text-stone py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <div className="text-base font-medium h-serif">THE HUMAN ARCHIVE</div>
            <div className="mt-2">Preserve. Contextualize. Understand.</div>
          </div>
          <nav className="mt-6 md:mt-0 flex gap-6">
            <a href="/archive">Archive</a>
            <a href="/perspectives">Perspectives</a>
            <a href="/literature">Literature</a>
            <a href="/about">About</a>
            <a href="/contribute">Contribute</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-stone/70">© {new Date().getFullYear()} The Human Archive. All demo content is sample data for a prototype.</div>
      </div>
    </footer>
  )
}
