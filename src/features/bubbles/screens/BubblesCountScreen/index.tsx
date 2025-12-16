import React, { useMemo } from 'react';

import { FormProvider,useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@components/Button';
import { ControlledInput } from '@components/ControlledInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import { BubblesCountScreenNavigationProp,BubblesStackName } from '@navigation/BubblesNavigator/types';

import { createBubblesCountSchema } from '../../schemas';
import { styles } from './styles';

type FormValues = {
  count: string;
};

export const BubblesCountScreen = ({ navigation }: BubblesCountScreenNavigationProp) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const schema = useMemo(() => createBubblesCountSchema(t), [t]);

  const methods = useForm<FormValues>({
    defaultValues: { count: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => navigation.replace(BubblesStackName.Bubbles, { count: +data.count });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
     <FormProvider  {...methods}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text.primary }]}>{t('bubbles.countTitle')}</Text>
        <Text style={[styles.description, { color: colors.text.tertiary }]}>
          {t('bubbles.countDescription')}
        </Text>

        <View style={styles.inputContainer}>
          <ControlledInput
            name={'count'}
            keyboardType={'number-pad'}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title={t('bubbles.start')} onPress={methods.handleSubmit(onSubmit)} />
        </View>
      </View>
      </FormProvider>
    </SafeAreaView>
  );
};


