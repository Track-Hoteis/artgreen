import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Baby } from 'lucide-react';

interface ChildrenSelectorProps {
  childrenCount: number;
  childrenAges: number[];
  onChildrenCountChange: (count: number) => void;
  onChildAgeChange: (index: number, age: number) => void;
  variant: 'light' | 'dark';
}

const accentSelectClass =
  'w-full border border-accent px-3 py-2.5 text-sm text-white bg-transparent focus:outline-none focus:border-accent appearance-none cursor-pointer';

export default function ChildrenSelector({
  childrenCount,
  childrenAges,
  onChildrenCountChange,
  onChildAgeChange,
  variant,
}: ChildrenSelectorProps) {
  const [open, setOpen] = useState(false);

  const isLight = variant === 'light';

  const triggerClass = isLight
    ? 'flex items-center gap-2 w-full border border-gray-200 px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition cursor-pointer text-left'
    : 'flex items-center gap-2 w-full border border-white/20 px-4 py-3 text-sm text-white bg-transparent focus:outline-none focus:border-white transition cursor-pointer text-left';

  const countLabel =
    childrenCount === 0
      ? '0 Crianças'
      : childrenCount === 1
        ? '1 Criança'
        : `${childrenCount} Crianças`;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={isLight ? 'children-light' : 'children-dark'}
        className={`text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5 ${
          isLight ? 'text-text-medium' : 'text-white/60 tracking-[0.2em] text-[11px]'
        }`}
      >
        <Baby size={isLight ? 14 : 13} />
        Crianças
      </label>

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button type="button" id={isLight ? 'children-light' : 'children-dark'} className={triggerClass}>
            {countLabel}
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={8}
            align="start"
            className="z-[60] bg-[#333333] border border-white/20 p-5 shadow-2xl min-w-[260px] animate-in fade-in-0 zoom-in-95"
          >
            {/* Number of children */}
            <div className="mb-4">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60 mb-2">
                N° de Crianças
              </label>
              <div className="relative">
                <select
                  value={childrenCount}
                  onChange={(e) => onChildrenCountChange(Number(e.target.value))}
                  className={accentSelectClass}
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n} className="bg-[#333333]">
                      {n}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-accent">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Ages */}
            {childrenAges.map((age, i) => (
              <div key={i} className="mb-3">
                <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60 mb-2">
                  Idade Crianca {i + 1}
                </label>
                <div className="relative">
                  <select
                    value={age}
                    onChange={(e) => onChildAgeChange(i, Number(e.target.value))}
                    className={accentSelectClass}
                  >
                    <option value={0} className="bg-[#333333]">
                      Menos de 1 ano
                    </option>
                    {Array.from({ length: 14 }, (_, a) => a + 1).map((a) => (
                      <option key={a} value={a} className="bg-[#333333]">
                        {a} {a === 1 ? 'ano' : 'anos'}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-accent">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            <Popover.Arrow className="fill-[#333333]" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
