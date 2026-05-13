import React from 'react';

export default function AuthPage() {
  return (
    <main className="flex min-h-screen auth-gradient">
      {/* Brand Visualization Side */}
      <section className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center p-xl">
        <div className="absolute inset-0 z-0">
          <img
            alt="Climate Data Visual"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-SEEesAIAViw31vz1jRZC8F9SxSYYLqcZ8LVgw3nQf3OZs2T4NOcP_OWSTotdliYsxP6YuNOPe7L1qZlb6BZO15m82cRw3qG6s9oAr3Vdb9UgZa8UQHuYAiFBe08eP8WOBRsJsG3m_WwgFKyyAB2zWSB7hFu3UUQDKUe7oYL2DwAsrdXbXaYsBg89wdrCdGFddpNKNO9PAaQef3V5RFHcylSHCvKaOtmPHwMTAQsFgQcdN1uX2HhCKYy-uyzZLPMeuWbZLktNMQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-lg">
          <div className="mb-lg flex items-center gap-xs">
            <span className="material-symbols-outlined text-primary text-4xl">sensors</span>
            <h1 className="font-display-lg text-display-lg font-bold text-primary tracking-tight">ClimateOS</h1>
          </div>
          <h2 className="font-display-xl text-display-xl text-on-surface mb-md">Empowering Environmental Action</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Access the world's most advanced climate monitoring network. Turn raw sensor data into actionable insights for a sustainable future.
          </p>
          <div className="mt-xl grid grid-cols-2 gap-md">
            <div className="glass-panel p-md rounded-xl">
              <span className="font-mono-data text-mono-data text-primary block mb-xs">LIVE NODES</span>
              <span className="font-display-lg text-display-lg">14,208</span>
            </div>
            <div className="glass-panel p-md rounded-xl">
              <span className="font-mono-data text-mono-data text-primary block mb-xs">DATA UPTIME</span>
              <span className="font-display-lg text-display-lg">99.9%</span>
            </div>
          </div>
        </div>
      </section>
      {/* Authentication Form Side */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-sm md:p-xl">
        <div className="w-full max-w-[480px]">
          <div className="lg:hidden flex items-center gap-xs mb-xl">
            <span className="material-symbols-outlined text-primary text-3xl">sensors</span>
            <span className="font-display-lg text-display-lg font-bold text-primary tracking-tight">ClimateOS</span>
          </div>
          <div className="mb-xl">
            <h3 className="font-headline-md text-headline-md mb-xs">Welcome back</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Manage your global network and monitor environmental health.</p>
          </div>
          {/* Toggle Switch */}
          <div className="bg-surface-container-high p-xs rounded-xl flex mb-lg">
            <button className="flex-1 py-xs rounded-lg font-label-caps text-label-caps bg-primary-container text-on-primary-container transition-all">
              LOGIN
            </button>
            <button className="flex-1 py-xs rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-all">
              SIGN UP
            </button>
          </div>
          {/* Form */}
          <form className="space-y-md">
            <div>
              <label className="block font-body-sm text-body-sm text-on-surface-variant mb-xs" htmlFor="email">Email Address</label>
              <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" id="email" placeholder="admin@climateos.network" type="email" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-xs">
                <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="password">Password</label>
                <a className="font-body-sm text-body-sm text-primary hover:underline" href="#">Forgot password?</a>
              </div>
              <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" id="password" placeholder="••••••••" type="password" />
            </div>
            <div className="flex items-center gap-xs">
              <input className="w-4 h-4 rounded border-outline-variant/30 bg-surface-container-lowest text-primary focus:ring-primary" id="remember" type="checkbox" />
              <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="remember">Keep me authenticated for 30 days</label>
            </div>
            <button className="w-full bg-primary-container text-on-primary-container font-headline-sm text-headline-sm py-sm rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-xs" type="submit">
              Continue to Dashboard
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
          {/* Divider */}
          <div className="relative my-xl">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/20"></div>
            </div>
            <div className="relative flex justify-center text-label-caps text-label-caps uppercase">
              <span className="bg-background px-md text-on-surface-variant">Or access via</span>
            </div>
          </div>
          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-md">
            <button className="flex items-center justify-center gap-xs bg-surface-container border border-outline-variant/30 rounded-lg py-sm hover:bg-surface-container-high transition-all font-body-sm text-body-sm">
              {/* Google SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="currentColor"></path></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-xs bg-surface-container border border-outline-variant/30 rounded-lg py-sm hover:bg-surface-container-high transition-all font-body-sm text-body-sm">
              {/* GitHub SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.84c-3.03.66-3.67-1.46-3.67-1.46-.5-1.27-1.21-1.61-1.21-1.61-.99-.68.08-.66.08-.66 1.1.08 1.67 1.13 1.67 1.13.97 1.66 2.54 1.18 3.17.9.1-.7.37-1.18.69-1.45-2.42-.27-4.96-1.21-4.96-5.38 0-1.19.42-2.17 1.12-2.93-.11-.28-.48-1.39.11-2.89 0 0 .91-.29 3 1.12A10.4 10.4 0 0112 7.13c.94 0 1.88.13 2.77.38 2.08-1.41 3-1.12 3-1.12.6 1.5.22 2.61.11 2.89.71.76 1.12 1.74 1.12 2.93 0 4.18-2.55 5.1-4.98 5.37.39.34.73 1.01.73 2.03v3.01c0 .29.18.63.74.53A11 11 0 0012 1.27z" fill="currentColor"></path></svg>
              GitHub
            </button>
          </div>
          <footer className="mt-xl text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              By continuing, you agree to our
              <a className="text-on-surface hover:text-primary underline" href="#">Terms of Service</a> and
              <a className="text-on-surface hover:text-primary underline" href="#">Privacy Policy</a>.
            </p>
          </footer>
        </div>
      </section>
      {/* Support Help Floating Action */}
      <div className="fixed bottom-lg right-lg z-50">
        <button className="w-12 h-12 bg-surface-container-highest text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined">contact_support</span>
        </button>
      </div>
    </main>
  );
}
