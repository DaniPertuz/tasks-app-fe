import { useState } from 'react';
import { appColors } from '../../theme/colors';

export const useSwitchOptions = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const { quaternary, secondary, success, tertiary, warning } = appColors;

  const handleSwitchValue = (value: boolean) => {
    setSwitchValue(value);
  };

  const toggleSwitch = () => {
    setIsEnabled(previousState => {
      const newState = !previousState;
      handleSwitchValue(newState);
      return newState;
    });
  };

  return {
    isEnabled,
    quaternary,
    secondary,
    success,
    switchValue,
    tertiary,
    warning,
    toggleSwitch
  };
}

