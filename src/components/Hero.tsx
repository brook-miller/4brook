export function Hero() {
  return (
    <header className="relative">
      {/* Abstract blue header background */}
      <div className="h-48 md:h-64 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 h-48 md:h-64 opacity-40">
          <div className="absolute top-8 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute top-12 right-1/3 w-48 h-48 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute -top-4 left-1/2 w-80 h-80 bg-blue-600 rounded-full blur-3xl" />
        </div>
        {/* Subtle stars/dots overlay */}
        <div className="absolute inset-0 h-48 md:h-64" style={{
          backgroundImage: 'radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.2), transparent)',
          backgroundSize: '200px 200px'
        }} />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 md:-mt-36 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">
          {/* Headshot */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-gray-950 bg-gray-800 overflow-hidden shrink-0 shadow-xl">
            <img
              src="/headshot.jpg"
              alt="Brook Miller"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>

          {/* Name */}
          <div className="text-center md:text-left pb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Hi, I'm Brook.
            </h1>
            <p className="text-lg text-gray-400 mt-1">
              Building AI products. Teaching others to do the same.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
