function formatKey(key: string) {
  const preKey = 'WANGER:';
  return `${preKey}${key.toUpperCase()}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getData<T>(key: string, def: any = null): T {
  const str = localStorage.getItem(formatKey(key)) || '';
  try {
    const result = JSON.parse(str);
    return result === null ? def : result;
  } catch (e) {
    return def as T;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setData(key: string, data: any) {
  localStorage.setItem(formatKey(key), JSON.stringify(data));
}

const $storage = {
  set demo(val: string) {
    setData('demo', val);
  },
  get demo() {
    return getData<string>('demo');
  },
  clearAll() {
    localStorage.clear();
  }
};

export {
  formatKey,
  getData,
  setData,
  $storage
};

