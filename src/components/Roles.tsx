const roles = [
  {
    title: 'Fractional CTO',
    org: 'Quester',
    url: 'https://www.quester.com',
    description: 'AI-powered qualitative analysis tools for market research',
  },
  {
    title: 'Founder',
    org: 'Essential HCP',
    url: 'https://www.essentialhcp.com',
    description: 'Helping life science companies bring new products to market',
  },
  {
    title: 'Fractional CTO Advisor',
    org: 'Tribe AI',
    url: 'https://www.tribe.ai',
    description: 'Gen AI strategy, diligence, and implementation for Fortune 500 and PE-backed companies',
  },
  {
    title: 'Founder',
    org: 'Pianosa Insights',
    url: 'https://www.pianosainsights.com',
    description: 'Deep consumer insights from online conversations',
  },
  {
    title: 'Clinical Professor',
    org: 'Kellogg, Northwestern University',
    url: 'https://www.mccormick.northwestern.edu/research-faculty/directory/affiliated/miller-brook.html',
    description: 'Data and Data Systems for Business Leaders, Delivering ML Products',
  },
]

export function Roles() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-6">
        {roles.map((role) => (
          <div
            key={role.org}
            className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
          >
            <div className="shrink-0 sm:w-56 text-sm font-medium text-gray-500 uppercase tracking-wider">
              {role.title}
            </div>
            <div>
              <a
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-blue-400 transition-colors"
              >
                {role.org}
              </a>
              <span className="text-gray-500 mx-2">&mdash;</span>
              <span className="text-gray-400">{role.description}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Background */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm leading-relaxed">
          Previously: CmpE at Georgia Tech. Kellogg MBA. Product Management at Intel.
          10+ year journey founding and selling a social intelligence company (became Material).
        </p>
      </div>
    </section>
  )
}
