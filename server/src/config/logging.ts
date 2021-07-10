export const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.info(
      '\x1b[36m%s\x1b[0m',
      `[INFO: ${namespace}] | ${message}`,
      object
    );
  } else {
    console.info('\x1b[36m%s\x1b[0m', `[INFO: ${namespace}] | ${message}`);
  }
};

export const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.warn(
      '\x1b[33m%s\x1b[0m',
      `[WARN: ${namespace}] | ${message}`,
      object
    );
  } else {
    console.warn('\x1b[33m%s\x1b[0m', `[WARN: ${namespace}] | ${message}`);
  }
};

export const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.error(
      '\x1b[35m%s\x1b[0m',
      `[ERROR: ${namespace}] | ${message}`,
      object
    );
  } else {
    console.error('\x1b[35m%s\x1b[0m', `[ERROR: ${namespace}] | ${message}`);
  }
};

export const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(
      '\x1b[37m%s\x1b[0m',
      `[DEBUG: ${namespace}] | ${message}`,
      object
    );
  } else {
    console.debug('\x1b[37m%s\x1b[0m', `[DEBUG: ${namespace}] | ${message}`);
  }
};

// const getTimeStamp = (): string => {
//     return new Date().toISOString();
// };
