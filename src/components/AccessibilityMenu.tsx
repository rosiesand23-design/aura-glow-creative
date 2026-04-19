import { useEffect, useState } from "react";
import { X, Plus, Minus, Contrast, Pause, RotateCcw } from "lucide-react";
import a11yIcon from "@/assets/accessibility-icon.png";

type Settings = {
  fontScale: number; // 1 = 100%
  highContrast: boolean;
  reduceMotion: boolean;
  underlineLinks: boolean;
};

const DEFAULTS: Settings = {
  fontScale: 1,
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
};

const STORAGE_KEY = "a11y-settings";

const applySettings = (s: Settings) => {
  const root = document.documentElement;
  root.style.fontSize = `${s.fontScale * 100}%`;
  root.classList.toggle("a11y-high-contrast", s.highContrast);
  root.classList.toggle("a11y-reduce-motion", s.reduceMotion);
  root.classList.toggle("a11y-underline-links", s.underlineLinks);
};

const AccessibilityMenu = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(() => {
    if (typeof window === "undefined") return DEFAULTS;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS;
    } catch {
      return DEFAULTS;
    }
  });

  useEffect(() => {
    applySettings(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* ignore */
    }
  }, [settings]);

  const update = <K extends keyof Settings>(key: K, value: Settings[K]) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  const reset = () => setSettings(DEFAULTS);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-6 right-6 z-[90] h-12 w-12 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <A11yIcon className="h-7 w-7" />}
      </button>

      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed bottom-24 right-6 z-[90] w-[300px] max-w-[calc(100vw-3rem)] bg-background border border-border shadow-xl p-5 rounded-md"
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-foreground mb-4 font-medium">
            Accessibility
          </h2>

          <div className="space-y-4">
            <div>
              <div className="text-xs tracking-wider uppercase text-muted-foreground mb-2">Text size</div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => update("fontScale", Math.max(0.85, +(settings.fontScale - 0.1).toFixed(2)))}
                  aria-label="Decrease text size"
                  className="h-9 w-9 border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Minus className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="flex-1 text-center text-sm tabular-nums" aria-live="polite">
                  {Math.round(settings.fontScale * 100)}%
                </div>
                <button
                  type="button"
                  onClick={() => update("fontScale", Math.min(1.5, +(settings.fontScale + 0.1).toFixed(2)))}
                  aria-label="Increase text size"
                  className="h-9 w-9 border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <ToggleRow
              icon={<Contrast className="h-4 w-4" aria-hidden="true" />}
              label="High contrast"
              checked={settings.highContrast}
              onChange={(v) => update("highContrast", v)}
            />
            <ToggleRow
              icon={<Pause className="h-4 w-4" aria-hidden="true" />}
              label="Reduce motion"
              checked={settings.reduceMotion}
              onChange={(v) => update("reduceMotion", v)}
            />
            <ToggleRow
              icon={<span className="underline text-xs">A</span>}
              label="Underline links"
              checked={settings.underlineLinks}
              onChange={(v) => update("underlineLinks", v)}
            />

            <button
              type="button"
              onClick={reset}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase py-2 border border-border hover:bg-accent transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const ToggleRow = ({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className="w-full flex items-center justify-between gap-3 py-2"
  >
    <span className="flex items-center gap-2 text-sm text-foreground">
      <span className="h-6 w-6 flex items-center justify-center text-muted-foreground">{icon}</span>
      {label}
    </span>
    <span
      className={`relative inline-block h-5 w-9 rounded-full transition-colors ${
        checked ? "bg-foreground" : "bg-border"
      }`}
      aria-hidden="true"
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-background transition-all ${
          checked ? "left-[18px]" : "left-0.5"
        }`}
      />
    </span>
  </button>
);

export default AccessibilityMenu;
