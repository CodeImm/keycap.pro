import { ChangeEvent } from 'react';

import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';

import { FingerColorMapping } from '@/entities/keyFingerMapping';
import { Finger } from '@/shared/types';

import FingerFormControlLabel from './FingerFormControlLabel';
import FingerRadio from './FingerRadio';

interface Props {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  fingerColorMapping: FingerColorMapping;
}

const FingerSelectionForm = ({ value, onChange, fingerColorMapping }: Props) => {
  const t = useTranslations('Fingers');

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel id="left-hand" component="legend" sx={{ marginBottom: 1 }}>
            Левая рука
          </FormLabel>
          <RadioGroup aria-labelledby="left-hand" name="finger" value={value} onChange={onChange}>
            <FingerFormControlLabel
              value={Finger.LEFT_THUMB}
              control={<FingerRadio color={fingerColorMapping[Finger.LEFT_THUMB]} />}
              label={t('thumb')}
            />
            <FingerFormControlLabel
              value={Finger.LEFT_INDEX}
              control={<FingerRadio color={fingerColorMapping[Finger.LEFT_INDEX]} />}
              label={t('index')}
            />
            <FingerFormControlLabel
              value={Finger.LEFT_MIDDLE}
              control={<FingerRadio color={fingerColorMapping[Finger.LEFT_MIDDLE]} />}
              label={t('middle')}
            />
            <FingerFormControlLabel
              value={Finger.LEFT_RING}
              control={<FingerRadio color={fingerColorMapping[Finger.LEFT_RING]} />}
              label={t('ring')}
            />
            <FingerFormControlLabel
              value={Finger.LEFT_PINKIE}
              control={<FingerRadio color={fingerColorMapping[Finger.LEFT_PINKIE]} />}
              label={t('pinky')}
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel id="right-hand" component="legend" sx={{ marginBottom: 1 }}>
            Правая рука
          </FormLabel>
          <RadioGroup aria-labelledby="right-hand" name="finger" value={value} onChange={onChange}>
            <FingerFormControlLabel
              value={Finger.RIGHT_THUMB}
              control={<FingerRadio color={fingerColorMapping[Finger.RIGHT_THUMB]} />}
              label={t('thumb')}
            />
            <FingerFormControlLabel
              value={Finger.RIGHT_INDEX}
              control={<FingerRadio color={fingerColorMapping[Finger.RIGHT_INDEX]} />}
              label={t('index')}
            />
            <FingerFormControlLabel
              value={Finger.RIGHT_MIDDLE}
              control={<FingerRadio color={fingerColorMapping[Finger.RIGHT_MIDDLE]} />}
              label={t('middle')}
            />
            <FingerFormControlLabel
              value={Finger.RIGHT_RING}
              control={<FingerRadio color={fingerColorMapping[Finger.RIGHT_RING]} />}
              label={t('ring')}
            />
            <FingerFormControlLabel
              value={Finger.RIGHT_PINKIE}
              control={<FingerRadio color={fingerColorMapping[Finger.RIGHT_PINKIE]} />}
              label={t('pinky')}
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default FingerSelectionForm;
