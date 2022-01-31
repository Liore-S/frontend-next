import { extendTheme } from "@chakra-ui/react";
import { theme as ChakraTheme} from "@chakra-ui/react";
import createBreakPoints from  "@chakra-ui/theme-tools";


const fonts = extendTheme({
    ...ChakraTheme.fonts, 
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
    

})


const overrides = {
    ...ChakraTheme,
    fonts
}
// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const customTheme = extendTheme(overrides)

//export default cutomTheme
export default customTheme