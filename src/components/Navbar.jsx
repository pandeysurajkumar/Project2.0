export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container/70 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_24px_48px_-12px_rgba(5,20,36,0.25)] h-16 flex justify-between items-center px-margin">
      <div className="flex items-center gap-xs">
        <span className="material-symbols-outlined text-primary text-display-lg" data-icon="sensors">
          sensors
        </span>
        <h1 className="font-display-lg text-display-lg font-bold text-primary tracking-tight">
          ClimateOS
        </h1>
      </div>
      <nav className="hidden md:flex items-center gap-lg">
        <a
          className="text-on-surface-variant font-medium hover:bg-surface-variant/50 hover:text-on-surface transition-colors px-xs py-base rounded"
          href="#"
        >
          About
        </a>
        <a
          className="text-on-surface-variant font-medium hover:bg-surface-variant/50 hover:text-on-surface transition-colors px-xs py-base rounded"
          href="#"
        >
          Solutions
        </a>
        <a
          className="text-on-surface-variant font-medium hover:bg-surface-variant/50 hover:text-on-surface transition-colors px-xs py-base rounded"
          href="#"
        >
          Contact
        </a>
        <div className="flex items-center gap-sm ml-gutter">
          <button
            className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200"
            data-icon="notifications"
          >
            notifications
          </button>
          <button
            className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200"
            data-icon="settings"
          >
            settings
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center overflow-hidden">
            <img
              alt="Administrator Profile"
              className="w-full h-full object-cover"
              data-alt="A professional close-up portrait of a female environmental data scientist in a modern tech office. She is wearing sleek glasses and a dark blazer. The lighting is focused and clean, with a backdrop of soft-focus data monitors displaying green climate charts. The overall aesthetic is authoritative, high-tech, and minimal, matching a professional dark-themed UI."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl8TpzK4VqGGUjDuvKw9ObiF3aE-v-3491K6iVc7cQlPko-SEDZjwz574IlCGuV8YzuZw9LaXvi6_Xusyxc1esZ4wKyPixxDjsM4lm0qJrqfP6POYp2Jee3B5bUEWCQ4jPmK3bOw4DDHJzS_UA-QzesAY3yINudWsD9p6rIlBRbSYrU1oXJzZvQmvPp5erI5jverymyWqzixv7voDMmVRJi_jnf5sWuRtGdD3rDRM7X_38pTS27Q-mC5QluBQeZ9RnAIGV0tC6hNA"
            />
          </div>
        </div>
      </nav>
      <button className="md:hidden material-symbols-outlined text-on-surface" data-icon="menu">
        menu
      </button>
    </header>
  )
}