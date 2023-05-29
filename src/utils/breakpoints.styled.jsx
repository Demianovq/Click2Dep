const size = {
  mobile: '320px',
  mobileEnd: '767px',
  tablet: '768px',
  tabletEnd: '1199px',
  desktop: '1200px',
  desktopEnd: '1799px',
  desktopL: '1800px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileEnd: `(max-width: ${size.mobileEnd})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletEnd: `(max-width: ${size.tabletEnd})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopEnd: `(max-width: ${size.desktopEnd})`,
  desktopL: `(min-width: ${size.desktopL})`,
};
