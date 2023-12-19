import { ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';

import { Finger, FingersColorsSchema } from '@/entities/keyboard';

import FingerFormControlLabel from './FingerFormControlLabel';
import FingerRadio from './FingerRadio';

interface Props {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  fingersColorSchema: FingersColorsSchema;
}

const ActiveFingerForm = ({ value, onChange, fingersColorSchema }: Props) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel id="left-hand" component="legend" sx={{ marginBottom: 1 }}>
            Левая рука
          </FormLabel>
          <RadioGroup
            aria-labelledby="left-hand"
            name="finger"
            value={value}
            onChange={onChange}
          >
            <FingerFormControlLabel
              value={Finger.LEFT_THUMB}
              control={
                <FingerRadio color={fingersColorSchema[Finger.LEFT_THUMB]} />
              }
              label="Большой палец"
            />
            <FingerFormControlLabel
              value={Finger.LEFT_INDEX}
              control={
                <FingerRadio color={fingersColorSchema[Finger.LEFT_INDEX]} />
              }
              label="Указательный палец"
            />
            <FingerFormControlLabel
              value={Finger.LEFT_MIDDLE}
              control={
                <FingerRadio color={fingersColorSchema[Finger.LEFT_MIDDLE]} />
              }
              label="Средний палец"
            />
            <FingerFormControlLabel
              value={Finger.LEFT_RING}
              control={
                <FingerRadio color={fingersColorSchema[Finger.LEFT_RING]} />
              }
              label="Безымянный палец"
            />
            <FingerFormControlLabel
              value={Finger.LEFT_PINKIE}
              control={
                <FingerRadio color={fingersColorSchema[Finger.LEFT_PINKIE]} />
              }
              label="Мизинец"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel
            id="right-hand"
            component="legend"
            sx={{ marginBottom: 1 }}
          >
            Правая рука
          </FormLabel>
          <RadioGroup
            aria-labelledby="right-hand"
            name="finger"
            value={value}
            onChange={onChange}
          >
            <FingerFormControlLabel
              value={Finger.RIGHT_THUMB}
              control={
                <FingerRadio color={fingersColorSchema[Finger.RIGHT_THUMB]} />
              }
              label="Большой палец"
            />
            <FingerFormControlLabel
              value={Finger.RIGHT_INDEX}
              control={
                <FingerRadio color={fingersColorSchema[Finger.RIGHT_INDEX]} />
              }
              label="Указательный палец"
            />
            <FingerFormControlLabel
              value={Finger.RIGHT_MIDDLE}
              control={
                <FingerRadio color={fingersColorSchema[Finger.RIGHT_MIDDLE]} />
              }
              label="Средний палец"
            />
            <FingerFormControlLabel
              value={Finger.RIGHT_RING}
              control={
                <FingerRadio color={fingersColorSchema[Finger.RIGHT_RING]} />
              }
              label="Безымянный палец"
            />
            <FingerFormControlLabel
              value={Finger.RIGHT_PINKIE}
              control={
                <FingerRadio color={fingersColorSchema[Finger.RIGHT_PINKIE]} />
              }
              label="Мизинец"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default ActiveFingerForm;
