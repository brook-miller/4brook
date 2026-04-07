import { ArrowUpRight } from './icons'

const links = [
  { label: 'Presentations', url: 'https://github.com/brook-miller', icon: 'slides' },
  { label: 'GitHub', url: 'https://github.com/brook-miller', icon: 'github' },
  { label: 'Gen AI Use Cases', url: '#', icon: 'ai' },
  { label: 'Papers', url: '#', icon: 'paper' },
  { label: 'Books', url: '#', icon: 'book' },
  { label: 'Prompting', url: '#', icon: 'prompt' },
]

export function Links() {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-16">
      <div className="border-t border-gray-800 pt-12">
        <h2 className="text-xl font-semibold text-white mb-6">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800/80 transition-all"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {link.label}
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
