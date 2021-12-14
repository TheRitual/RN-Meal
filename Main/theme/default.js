import SWATCHES from "./SWATCHES";

const primary = SWATCHES.persianIndigo;
const accent = SWATCHES.blazeOrange;

const defaultTheme = {
    primary: primary,
    accent: accent,
    header:{
        background: primary,
        tint: SWATCHES.white,
    }
    
}

export default defaultTheme;