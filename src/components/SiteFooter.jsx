export default function SiteFooter() {
  return (
    <footer className="py-lg px-margin border-t border-outline-variant/10 bg-background flex flex-col md:flex-row justify-between items-center gap-md">
      <div className="flex items-center gap-xs">
        <span className="material-symbols-outlined text-primary" data-icon="sensors">
          sensors
        </span>
        <span className="font-display-lg text-headline-sm font-bold text-primary">ClimateOS</span>
      </div>
      <div className="text-on-surface-variant text-body-sm">
        © 2024 ClimateOS Technologies. All rights reserved. Precision in every data point.
      </div>
      <div className="flex gap-lg">
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined" data-icon="help">
            help
          </span>
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined" data-icon="contact_support">
            contact_support
          </span>
        </a>
      </div>
    </footer>
  )
}
