import {
  GlobalStyles_default,
  capitalize,
  defaultTheme_default,
  extendSxProp,
  identifier_default,
  require_jsx_runtime,
  unstable_memoTheme
} from "./chunk-DQ7L5YJT.js";
import {
  require_prop_types
} from "./chunk-MCMOV7PY.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default = capitalize;

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, {
    ...props,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
true ? GlobalStyles.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool])
} : void 0;
var GlobalStyles_default2 = GlobalStyles;

// node_modules/@mui/material/utils/memoTheme.js
var memoTheme = unstable_memoTheme;
var memoTheme_default = memoTheme;

// node_modules/@mui/material/zero-styled/index.js
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function globalCss(styles) {
  return function GlobalStylesWrapper(props) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      (0, import_jsx_runtime2.jsx)(GlobalStyles_default2, {
        styles: typeof styles === "function" ? (theme) => styles({
          theme,
          ...props
        }) : styles
      })
    );
  };
}
function internal_createExtendSxProp() {
  return extendSxProp;
}

export {
  capitalize_default,
  GlobalStyles_default2 as GlobalStyles_default,
  globalCss,
  internal_createExtendSxProp,
  memoTheme_default
};
//# sourceMappingURL=chunk-66VT4DOF.js.map
