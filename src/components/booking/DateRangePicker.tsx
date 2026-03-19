import { useState, useEffect, useMemo } from 'react';
import { DayPicker } from 'react-day-picker';
import { ptBR } from 'date-fns/locale';
import { startOfDay, isAfter, isSameDay, eachDayOfInterval } from 'date-fns';
import * as Popover from '@radix-ui/react-popover';
import { CalendarDays } from 'lucide-react';

import { formatDateRange } from './booking-utils';

import 'react-day-picker/style.css';

interface DateRangePickerProps {
  from: Date | undefined;
  to: Date | undefined;
  onSelect: (range: { from?: Date; to?: Date }) => void;
  variant: 'light' | 'dark';
}

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    setMobile(mq.matches);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);

  return mobile;
}

export default function DateRangePicker({
  from,
  to,
  onSelect,
  variant,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'selectingEnd'>('idle');
  const isMobile = useIsMobile();

  const today = useMemo(() => startOfDay(new Date()), []);

  // When popover opens, reset to idle
  function handleOpenChange(isOpen: boolean) {
    setOpen(isOpen);
    if (isOpen) {
      setPhase('idle');
    }
  }

  function handleDayClick(day: Date) {
    if (phase === 'idle') {
      // First click: set check-in
      onSelect({ from: day, to: undefined });
      setPhase('selectingEnd');
    } else {
      // Second click: set check-out
      if (isAfter(day, from!)) {
        // Valid: check-out is after check-in
        onSelect({ from: from, to: day });
        setPhase('idle');
        setOpen(false);
      } else {
        // Clicked before or same as check-in: restart with new check-in
        onSelect({ from: day, to: undefined });
        // Stay in selectingEnd phase
      }
    }
  }

  // Build modifiers for visual range highlighting
  const modifiers = useMemo(() => {
    const mods: Record<string, Date | Date[]> = {};

    if (from) {
      mods.rangeStart = from;
    }
    if (to) {
      mods.rangeEnd = to;
    }
    if (from && to) {
      const start = new Date(from);
      start.setDate(start.getDate() + 1);
      const end = new Date(to);
      end.setDate(end.getDate() - 1);
      if (isAfter(end, start) || isSameDay(end, start)) {
        mods.rangeMiddle = eachDayOfInterval({ start, end });
      }
    }

    return mods;
  }, [from, to]);

  const modifiersClassNames = {
    rangeStart: 'booking-range-start',
    rangeEnd: 'booking-range-end',
    rangeMiddle: 'booking-range-middle',
  };

  const isLight = variant === 'light';

  const triggerClass = isLight
    ? 'flex items-center gap-2 w-full border border-gray-200 px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition cursor-pointer text-left'
    : 'flex items-center gap-2 w-full border border-white/20 px-4 py-3 text-sm text-white bg-transparent focus:outline-none focus:border-white transition cursor-pointer text-left';

  return (
    <div className="flex flex-col">
      <span
        className={`text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5 ${
          isLight ? 'text-text-medium' : 'text-white/60 tracking-[0.2em] text-[11px]'
        }`}
      >
        <CalendarDays size={isLight ? 14 : 13} />
        Check-in / Check-out
      </span>

      <Popover.Root open={open} onOpenChange={handleOpenChange}>
        <Popover.Trigger asChild>
          <button type="button" className={triggerClass}>
            <CalendarDays size={14} className="shrink-0 opacity-60" />
            <span className={!from ? 'opacity-50' : ''}>
              {formatDateRange(from, to)}
            </span>
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={8}
            align="start"
            className="booking-calendar z-[60] shadow-2xl"
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <DayPicker
              numberOfMonths={isMobile ? 1 : 2}
              disabled={{ before: today }}
              locale={ptBR}
              showOutsideDays
              fixedWeeks
              onDayClick={handleDayClick}
              modifiers={modifiers}
              modifiersClassNames={modifiersClassNames}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
