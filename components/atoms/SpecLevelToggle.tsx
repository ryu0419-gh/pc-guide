import React from 'react';
import ToggleButton from '@/components/atoms/ToggleButton';
import { SpecLevel, SPEC_LEVEL_NAMES } from '@/type/type';

interface SpecLevelToggleProps {
  selectedLevel: SpecLevel;
  onLevelChange: (level: SpecLevel) => void;
  size?: "sm" | "md" | "lg";
}

export const SpecLevelToggle = ({ 
  selectedLevel, 
  onLevelChange, 
  size = "md" 
}: SpecLevelToggleProps) => {
  const options = Object.entries(SPEC_LEVEL_NAMES).map(([value, label]) => ({
    value,
    label
  }));

  return (
    <ToggleButton
      options={options}
      selected={selectedLevel}
      onChange={(value) => onLevelChange(value as SpecLevel)}
      size={size}
    />
  );
};