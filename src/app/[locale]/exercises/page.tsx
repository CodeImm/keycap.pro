import { unstable_setRequestLocale } from 'next-intl/server';

import { Container } from '@mui/material';

import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { redirect } from '@/shared/navigation';
import { paths } from '@/shared/routing';
import { InitialKeyboardSetup } from '@/widgets/initial-keyboard-setup';

type Props = {
  params: { locale: string };
};

export default async function ExercisesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  // const { mutate } = UserProfileAPI.useUpdateProfile();

  // const handleSubmit = ({ data, layout }: { data: KeyFingerMapping; layout: any }) => {
  //   mutate(
  //     {
  //       fingersZonesSchema: data,
  //       layout: layout,
  //     },
  //     {
  //       onError: (error) => {
  //         console.error('Ошибка при обновлении конфигурации клавиатуры:', error);
  //       },
  //       onSuccess: (response) => {
  //         if (response.success) {
  //           console.log('Профиль пользователя успешно обновлен:', response.data);
  //         } else {
  //           console.warn('Не удалось обновить профиль пользователя:', response.message);
  //         }
  //       },
  //     }
  //   );
  // };

  const { user } = await validateRequest();

  if (user && !user.registrationCompleted) {
    redirect(paths.profile.setup);
  }

  return (
    <Container maxWidth="md">
      {/* <InitialKeyboardSetup onSubmit={handleSubmit} /> */}
      <InitialKeyboardSetup />
    </Container>
  );
}
