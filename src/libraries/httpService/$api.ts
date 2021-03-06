import { HttpService } from '@redux-model/react';

export const $api = new HttpService<{ error: string, reason: string }>({
  baseUrl: 'https://registry.npm.taobao.org',
  headers: () => {
    return {
      Accept: 'application/json',
    };
  },
  onRespondError: (response, transform) => {
    if (response.data && response.data.reason) {
      transform.message = response.data.reason;
    }
  },
  onShowSuccess: (successText) => {
    console.info(successText);
    alert(successText);
  },
  onShowError: (errorText) => {
    console.error(errorText);
    alert(errorText);
  },
});
