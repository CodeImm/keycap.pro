export function getLetterAvatar(userName?: string | null) {
  return userName
    ? `${userName?.split(' ')[0][0]}${
        userName?.split(' ')[1] ? userName?.split(' ')[1][0] : ''
      }`
    : '';
}
