import { CompleteRegistrationFormData } from '../../ui/CompleteRegistrationForm';

const regex = /([^\\(]*)/;

export const mapUserDataToApi = (data: CompleteRegistrationFormData) => {
  const mappedData = {
    ...data,
    dateOfBirth: `${data.dateOfBirth.year}-${+data.dateOfBirth.month + 1}-${data.dateOfBirth.day}`,
    //TODO: сделать в селекторе различающимися value (без (GPT+3)) и renderOption (c (GPT+3))
    timeZone: data.timeZone.match(regex)?.[1].trim() ?? '',
  };
  console.log(mappedData);
  return mappedData;
};
