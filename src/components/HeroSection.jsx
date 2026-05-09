export default function HeroSection() {
  return (
    <section className="relative w-full h-[921px] overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
        <img
          alt="Real-time Monitoring"
          className="w-full h-full object-cover"
          data-alt="A cinematic wide view of a futuristic digital earth globe glowing with vibrant emerald green network lines and data nodes against a deep space navy blue background. Swirling atmospheric data visualizations surround the planet, representing real-time climate monitoring. The lighting is atmospheric and high-contrast, evoking a sense of urgent scientific clarity and global technological surveillance."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF162z4J1U3rE_sm_6Mdwv_mNFqTNku49vCoPYUpMlu0oApOUYM5CBF4F_7gJG0SMed9zb4ldIwglleyFdKneKRgHVzYOAfyBGU1TeVRV-2wu0An6HkybSNKEgBcLC9r2K9mEGWYRr4dIjIwjkbTlwEdqMq-rEtRoWjg_zvS_26sVrO88OX3DuY-jRZJd_xJtEO8W_gEzzEBGrN0XM0-YJcJLOsXiSkie5gDAZqGa4-r8THkjlhDIpMdx5lJhQPz84wRdam-wrlRE"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-margin md:px-xl">
          <div className="max-w-3xl space-y-md">
            <div className="inline-flex items-center gap-xs bg-primary/10 border border-primary/20 px-sm py-xs rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-label-caps font-label-caps text-primary">LIVE DATA STREAM</span>
            </div>
            <h2 className="font-display-xl text-display-xl text-on-surface leading-tight">
              Real-time <span className="text-primary">Monitoring</span> for a Changing Planet.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Deploy high-precision sensors globally to track air quality, carbon metrics, and thermal shifts as
              they happen. Immediate visibility into critical environmental KPIs.
            </p>
            <div className="pt-lg flex flex-wrap gap-md">
              <button className="bg-primary-container text-on-primary-container px-lg py-md rounded-lg font-headline-sm flex items-center gap-xs hover:brightness-110 transition-all active:scale-95">
                Get Started{" "}
                <span className="material-symbols-outlined" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </button>
              <button className="bg-surface-container-high border border-outline-variant/30 text-on-surface px-lg py-md rounded-lg font-headline-sm hover:bg-surface-variant transition-all active:scale-95">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-margin left-margin right-margin z-30 flex justify-between items-end">
        <div className="flex gap-xs">
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <div className="w-12 h-1 bg-surface-container-highest rounded-full"></div>
          <div className="w-12 h-1 bg-surface-container-highest rounded-full"></div>
        </div>
        <div className="flex gap-sm">
          <button className="glass-panel p-md rounded-full text-on-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined" data-icon="chevron_left">
              chevron_left
            </span>
          </button>
          <button className="glass-panel p-md rounded-full text-on-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined" data-icon="chevron_right">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
