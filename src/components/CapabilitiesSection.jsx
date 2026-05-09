export default function CapabilitiesSection() {
  return (
    <section className="py-xl px-margin">
      <div className="mb-lg space-y-xs">
        <h3 className="font-label-caps text-label-caps text-primary">SYSTEM CAPABILITIES</h3>
        <h2 className="font-display-lg text-display-lg text-on-surface">Integrated Climate Intelligence</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 glass-panel p-lg rounded-xl flex flex-col justify-between group min-h-[400px]">
          <div className="space-y-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="material-symbols-outlined text-headline-md" data-icon="hub">
                hub
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface">Automated Collection</h4>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Eliminate manual data entry errors. Our edge computing nodes automatically ingest, sanitize, and
              validate climate data from heterogeneous sources including satellite feeds and local IOT arrays.
            </p>
          </div>
          <div className="mt-xl h-48 w-full rounded-lg bg-surface-dim border border-outline-variant/10 overflow-hidden relative">
            <img
              alt="Data Visualizations"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              data-alt="A detailed digital dashboard showing complex data visualization charts in shades of emerald green and cool slate blue. The screen displays real-time fluctuating line graphs, radial progress bars, and interconnected data nodes. The layout is clean and professional, with a high-tech glassmorphism effect and subtle neon glows against a dark navy background."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPfPqhXJLHGnoS_NiCaMvP5wPNLWq1laQxn20xxuq4oWi8WpUXf0tSsrXZ3DVntV6YqYmApYBr2MfqiZNnibpMI0jW22GmcsafLt-Zr9B9ETROcEsbqaNq8wIwzWc09rpVv-2om0--ojI-4t9QDYHcssK-WIr-ndXFO8h1icUyyEI-LLvrYzDQaB5U2dBbe_O2RlgT438NT3lWoqeSPk-pacSN_rNFY63LeEfYB1Kl7GuoH3gI3m8DhK8QZ75fuo2UE3w4y6Y-lNE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/10 p-lg rounded-xl flex flex-col gap-md">
          <div className="w-10 h-10 rounded-lg bg-secondary-container/30 flex items-center justify-center text-secondary border border-outline-variant/10">
            <span className="material-symbols-outlined" data-icon="verified_user">
              verified_user
            </span>
          </div>
          <h4 className="font-headline-sm text-headline-sm text-on-surface">Precision &amp; Compliance</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Meet global reporting standards with audit-ready data trails. Every metric is timestamped and
            cryptographically signed at the source.
          </p>
          <div className="mt-auto pt-md border-t border-outline-variant/10">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-body-sm" data-icon="check_circle">
                check_circle
              </span>
              <span className="text-label-caps font-label-caps">99.9% Sensor Uptime</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/10 p-lg rounded-xl flex flex-col gap-md">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <span className="material-symbols-outlined" data-icon="insights">
              insights
            </span>
          </div>
          <h4 className="font-headline-sm text-headline-sm text-on-surface">Data-Driven Insights</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            AI-powered predictive modeling identifies climate risks before they manifest. Move from reactive
            reporting to proactive environmental management.
          </p>
        </div>

        <div className="md:col-span-8 glass-panel p-lg rounded-xl relative overflow-hidden flex items-center">
          <div className="z-10 space-y-sm max-w-sm">
            <h4 className="font-headline-md text-headline-md text-on-surface">Geospatial Awareness</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Visualize your entire environmental footprint on a high-fidelity 3D map interface.
            </p>
            <button className="text-primary font-bold flex items-center gap-xs hover:translate-x-1 transition-transform">
              Explore Map{" "}
              <span className="material-symbols-outlined" data-icon="map">
                map
              </span>
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
            <div className="w-full h-full bg-surface-container-highest" data-location="San Francisco" style={{}}>
              <img
                alt="Map Background"
                className="w-full h-full object-cover"
                data-alt="A top-down satellite view of a coastal city at night, with street lights forming an intricate glowing golden grid. Overlaid on the map are semi-transparent emerald green heat-map clusters representing air quality data. The style is dark and professional, using a deep navy ocean color and subtle technological UI elements typical of a satellite monitoring system."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtYuLWJ9FY5Bk7Cul0CpeguHFJDE6r5Rqi2hmNccBGkzeFTwX3yJKBZ83bCC-Ul6yWP0CiI4nkW3FmdA42pJRQpmm7gWuysL5I_fLLvcenyyPSYoDi5HNnM5kj74uTLPGdum_gOcI9Jt9sWDwwgaKxqE7NKj7GXiwlyj0BluR3AMWACEG_KSX6UwBlFDFSjV3ymgyJIJlpHVJ8Mq_LpplHWoe404F-9_4nX_ff2p2OO0H8JvOVUhKpEnWeNmqGFCfvtK6aOOtkx50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
