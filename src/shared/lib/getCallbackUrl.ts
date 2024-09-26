export const getCallbackUrl = () => {
  const callbackUrl = new URLSearchParams(window.location.search).get('callbackUrl');

  return callbackUrl ? `?callbackUrl=${callbackUrl}` : '';
};
