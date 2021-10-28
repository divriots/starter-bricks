import * as React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'jss';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StyleSheetManager } from 'styled-components';
import { jssPreset, StylesProvider } from '@mui/styles';
import {
  useTheme,
  styled,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import rtl from 'jss-rtl';

const FramedDemo = (props) => {
  const { children, document } = props;

  const theme = useTheme();
  React.useEffect(() => {
    document.body.dir = theme.direction;
  }, [document, theme.direction]);

  const { jss, sheetsManager } = React.useMemo(() => {
    return {
      jss: create({
        plugins: [...jssPreset().plugins, rtl()],
        insertionPoint: document.head,
      }),
      sheetsManager: new Map(),
    };
  }, [document]);

  const cache = React.useMemo(
    () =>
      createCache({
        key: `iframe-demo-${theme.direction}`,
        prepend: true,
        container: document.head,
        stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : [],
      }),
    [document, theme.direction]
  );

  const getWindow = React.useCallback(() => document.defaultView, [document]);

  return (
    <StylesProvider jss={jss} sheetsManager={sheetsManager}>
      <StyleSheetManager
        target={document.head}
        stylisPlugins={theme.direction === 'rtl' ? [rtlPlugin] : []}
      >
        <CacheProvider value={cache}>
          {React.cloneElement(children, {
            window: getWindow,
          })}
        </CacheProvider>
      </StyleSheetManager>
    </StylesProvider>
  );
};

const Frame = styled('iframe')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  flexGrow: 1,
  height: 400,
  width: '100%',
  border: 0,
  boxShadow: theme.shadows[1],
}));

function Demo(props) {
  const { children, name = 'demo-iframe', ...other } = props;
  const title = `${name} demo`;
  /**
   * @type {import('react').Ref<HTMLIFrameElement>}
   */
  const frameRef = React.useRef(null);

  // If we portal content into the iframe before the load event then that content
  // is dropped in firefox.
  const [iframeLoaded, onLoad] = React.useReducer(() => true, false);

  React.useEffect(() => {
    const document = frameRef.current.contentDocument;
    // When we hydrate the iframe then the load event is already dispatched
    // once the iframe markup is parsed (maybe later but the important part is
    // that it happens before React can attach event listeners).
    // We need to check the readyState of the document once the iframe is mounted
    // and "replay" the missed load event.
    // See https://github.com/facebook/react/pull/13862 for ongoing effort in React
    // (though not with iframes in mind).
    if (
      document != null &&
      document.readyState === 'complete' &&
      !iframeLoaded
    ) {
      onLoad();
    }
  }, [iframeLoaded]);

  const document = frameRef.current?.contentDocument;
  return (
    <React.Fragment>
      <Frame onLoad={onLoad} ref={frameRef} title={title} {...other} />
      {iframeLoaded !== false
        ? ReactDOM.createPortal(
            <FramedDemo document={document}>{children}</FramedDemo>,
            document.body
          )
        : null}
    </React.Fragment>
  );
}

const getTheme = (outerTheme) => {
  const resultTheme = createTheme({
    palette: { mode: outerTheme.palette.mode || 'light' },
  });

  if (outerTheme.direction) resultTheme.direction = outerTheme.direction;
  if (outerTheme.spacing) resultTheme.spacing = outerTheme.spacing;

  return resultTheme;
};

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
  insertionPoint: document.querySelector('#insertion-point-jss') as any,
});

export const DemoFrame = React.memo((props) => (
  <StylesProvider jss={jss}>
    <ThemeProvider theme={(outerTheme) => getTheme(outerTheme)}>
      <Demo>{props.children}</Demo>
    </ThemeProvider>
  </StylesProvider>
));
