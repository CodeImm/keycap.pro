import { ChangeEvent, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { FormControlLabel, Radio } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import isEqual from 'lodash.isequal';

import {
  FingerColorMapping,
  KeyFingerMapping,
  KeyFingerMappingId,
  LayoutId,
  LayoutType,
  System,
} from '@/entities/keyboard';
import { getKeyFingerMappingById } from '@/entities/keyboard/lib/getKeyFingerMappingById';

interface Props {
  system: System;
  keyFingerMappingIdList: Exclude<KeyFingerMappingId, 'custom'>[];
  fingerColorMapping: FingerColorMapping;
  layoutId: LayoutId;
  layoutType: LayoutType;
  customKeyFingerMapping: KeyFingerMapping;
  defaultValue: KeyFingerMappingId;
  onChange: (value: KeyFingerMappingId) => void;
}

const KeyFingerMappingSelector = ({
  system,
  fingerColorMapping,
  layoutId,
  layoutType,
  keyFingerMappingIdList,
  defaultValue,
  customKeyFingerMapping,
  onChange,
}: Props) => {
  const t = useTranslations('Fingers');

  const [id, setId] = useState(defaultValue);

  const handleChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    onChange(value as KeyFingerMappingId);
    setId(value as KeyFingerMappingId);
  };

  useEffect(() => {
    if (isEqual(customKeyFingerMapping, getKeyFingerMappingById('logical'))) {
      setId('logical');
    } else if (
      isEqual(customKeyFingerMapping, getKeyFingerMappingById('optimized'))
    ) {
      setId('optimized');
    } else {
      setId('custom');
    }
  }, [customKeyFingerMapping]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <RadioGroup
          aria-labelledby="left-hand"
          name="finger"
          value={id}
          onChange={handleChange}
          row
          sx={{ flexWrap: 'nowrap', overflowX: 'scroll' }}
        >
          {keyFingerMappingIdList.map((keyFingerMappingId) => (
            <FormControlLabel
              key={keyFingerMappingId}
              value={keyFingerMappingId}
              labelPlacement="bottom"
              control={<Radio value={keyFingerMappingId}></Radio>}
              label={keyFingerMappingId}
            />
          ))}
          <FormControlLabel
            key="custom"
            value="custom"
            labelPlacement="bottom"
            control={<Radio disabled value="custom" />}
            label="custom"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default KeyFingerMappingSelector;
