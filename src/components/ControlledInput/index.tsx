import React from 'react';

import { FieldValues, Path, useController } from 'react-hook-form';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import { TranslationKey } from '@constants/translations';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';

import { styles } from './styles';

type ControlledInputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: Path<TFieldValues>;
  label?: string;
  placeholderKey?: TranslationKey;
} & Omit<TextInputProps, 'onChangeText' | 'value' | 'onBlur' | 'ref' | 'placeholder'>;

export const ControlledInput = ({
  name,
  label,
  placeholderKey,
  ...inputProps
}: ControlledInputProps) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
  });

  const handleChangeText = (text: string) => {
    onChange(text);
  };

  const handleBlur = () => {
    onBlur();
  };

  const placeholder = placeholderKey ? t(placeholderKey) : undefined;

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: colors.text.primary }]}>{label}</Text>
      )}
      <TextInput
        ref={ref}
        value={value?.toString() ?? ''}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor={colors.text.tertiary}
        style={[
          styles.input,
          {
            borderColor: error ? colors.text.error : colors.border.separator,
            color: colors.text.primary,
          },
          inputProps.style,
        ]}
        {...inputProps}
      />
      <Text style={[styles.errorText, { color: colors.text.error }]}>
        {error?.message ?? ' '}
      </Text>
    </View>
  );
};
