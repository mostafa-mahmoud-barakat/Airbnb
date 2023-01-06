/** Flexbox styles */

export const flexBetween = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const flexBetweenCenter = {
  display: 'flex',
  justifyContent: { xs: 'center', md: 'space-between' },
  alignItems: 'center',
};

export const footerLayout = {
  display: 'flex',
  flexDirection: { sx: 'column' },
  justifyContent: { xs: 'center', md: 'space-between' },
  alignItems: 'center',
};

export const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const fullWidthFlex = {
  display: 'flex',
  width: '100%',
};

export const justifyCenter = { display: 'flex', justifyContent: 'center' };

export const dFlex = {
  display: 'flex',
  flexDirection: 'row',
};

export const fixedBottom = {
  position: 'absolute',
  bottom: 100,
  width: '100%',
};

export const displayOnDesktop = { display: { xs: 'none', md: 'block' } };


