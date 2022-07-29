import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: {
    html: {
      '@media(min-width: 768px)': {
        fontSize: '0.9vw'
      }
    },
    body: {
      lineHeight: '1.12',
      fontFamily: 'Rajdhani'
    },
    '*:focus': {
      outline: 'none !important'
    }
  }
};

const colors = {
  blue: {
    500: '#007bff'
  }
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: '500',
      _hover: {
        '@media(min-width: 768px)': {
          transform: 'translateY(-.15rem)'
        }
      },
      _active: {
        transform: 'scale(.95)'
      }
    },
    sizes: {
      md: {
        fontSize: '1rem',
        px: '2.5rem',
        py: '0.75rem'
      },
      lg: {
        fontSize: '1rem',
        px: '2.75rem',
        py: '1.25rem'
      },
      xs: {
        fontSize: '0.75rem',
        px: '0.875rem',
        py: '0.875rem'
      }
    },
    variants: {
      solid: (props: any) => {
        switch (props.colorScheme) {
          case 'white':
            return {
              bg: 'white',
              color: 'purple.500',
              _hover: {
                bg: 'gray.300'
              }
            };

          default:
            return {};
        }
      },
      outline: (props: any) => {
        switch (props.colorScheme) {
          case 'white':
            return {
              bg: 'transparent',
              color: 'white',
              _hover: {
                bg: 'whiteAlpha.200'
              }
            };

          default:
            return {};
        }
      }
    }
  },
  Input: {
    variants: {
      outline: () => {
        return {
          field: {
            borderColor: '#BDBDBD',
            fontSize: '0.875rem'
          }
        };
      }
    }
  },
  Select: {
    baseStyle: () => ({
      field: {
        cursor: 'pointer'
      }
    }),
    variants: {
      outline: () => {
        return {
          field: {
            borderColor: '#BDBDBD'
          }
        };
      }
    }
  },
  Tabs: {
    sizes: {
      md: {
        tab: {
          fontSize: '1rem',
          px: '2.313rem',
          py: '0.625rem'
        }
      }
    },
    variants: {
      'solid-rounded': (props: any) => {
        return {
          tab: {
            color: 'gray.text.primary',
            fontWeight: 'normal',
            _selected: {
              color: 'white',
              fontWeight: 'bold'
            }
          }
        };
      }
    }
  }
};

const fonts = {
  body: 'Helvetica Neue, sans-serif'
};

export default extendTheme({
  components,
  colors,
  fonts,
  styles
});
