const log = console.log;
export const framerLogger = (label: any) => log(`%c${label}: animation complete`, "color: red");
export const stateLogger = (label: any, mounted: any) => {
  mounted
    ? log(`%c${label}: mounted`, "color: green")
    : log(`%c${label}: unmounted`, "color: orange");
};
