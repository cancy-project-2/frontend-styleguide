import { useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";
import { ThemeProvider, CssBaseline } from "@mui/material";
import themes from "./themes";
export * from "@mui/material";
export { Masonry } from "@mui/lab";

const defTheme = "dark";

export const style$ = new BehaviorSubject({
  theme: defTheme,
});

export const ThemeWithSwitcherProvider = ({ children }) => {
  const [type, setType] = useState(null);

  useEffect(() => {
    const subscription = style$.subscribe(({ t }) => {
      if (type !== t) {
        setType(t);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider theme={themes[type] || themes[defTheme]}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
