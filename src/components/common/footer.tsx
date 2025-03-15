export default function Footer() {
  return (
    <footer className="h-max px-4 py-4 flex justify-between bg-white/20 ring-white/20 backdrop-blur-sm border-2 border-white/20 sm:px-8 xl:px-16">
      <div className="w-max flex gap-2 flex-nowrap text-sm text-black/80 md:text-base xl:text-lg">
        <span>&copy; {new Date().getFullYear()} | </span>
        <a
          href="https://github.com/alpha-og"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Athul Anoop
        </a>
      </div>
      <div>
        <a
          href="https://github.com/alpha-og/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-black/80 md:text-base xl:text-lg hover:text-indigo-600 transition-colors ease-in-out duration-500"
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
}
