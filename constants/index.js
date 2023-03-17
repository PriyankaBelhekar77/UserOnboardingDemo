export const DOMAIN_REGEX = '^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$';

export const VALIDATE_ARGS = {
  domainLink: {
    argName: 'src',
    regex: DOMAIN_REGEX,
    error: '[1SilverBullet][user-onboarding] URL link provided is invalid. Please pass correct URL'
  },
  accessToken: {
    argName: 'accessToken',
    regex: '^[0-9a-fA-F]{64}$',
    error: '[1SilverBullet][user-onboarding] Access token provided is invalid.'
  },
  // onClose: {
  //   argName: 'onClose',
  //   type: 'function',
  //   error: '[1SilverBullet][user-onboarding] onClose callback provided is invalid. Please pass a function only'
  // }
};