'use client';

import { PropsWithChildren, useTransition } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Locale } from '@/shared/config/next-intl/config';
import { usePathname, useRouter } from '@/shared/navigation';

interface Props {
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect({ children, defaultValue, label }: PropsWithChildren<Props>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function handleChange(event: SelectChangeEvent) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as Locale });
    });
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="locale-switcher-select-label">{label}</InputLabel>
      <Select
        labelId="locale-switcher-select-label"
        id="locale-switcher-select"
        label={label}
        onChange={handleChange}
        defaultValue={defaultValue}
        disabled={isPending}
      >
        {children}
      </Select>
    </FormControl>
  );
}
