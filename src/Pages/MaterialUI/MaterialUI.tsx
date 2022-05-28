import {createTheme, colors, ThemeProvider} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab';
import { Stack } from "@mui/material";
import { MuiAccordion } from "./MuiAccordian";
import MuiAlert from "./MuiAlert";
import MuiAutoComplete from "./MuiAutoComplete";
import MuiAvatar from "./MuiAvatar";
import MuiBadge from "./MuiBadge";
import MuiBottomNavigation from "./MuiBottomNavigation";
import MuiBreadCrumbs from "./MuiBreadCrumbs";
import MuiButton from "./MuiButton";
import { MuiCard } from "./MuiCard";
import { MuiCheckBox } from "./MuiCheckBox";
import MuiChip from "./MuiChip";
import MuiDateRangePicker from "./MuiDateRangePicker";
import MuiDialog from "./MuiDialog";
import MuiDrawer from "./MuiDrawer";
import { MuiImageList } from "./MuiImageList";
import MuiLayout from "./MuiLayout";
import MuiLink from "./MuiLink";
import MuiList from "./MuiList";
import { MuiLoadingButton } from "./MuiLoadingButton";
import { MuiMasonry } from "./MuiMasonry";
import MuiNavbar from "./MuiNavbar";
import MuiProgress from "./MuiProgress";
import { MuiRadioButton } from "./MuiRadioButton";
import { MuiRating } from "./MuiRating";
import MuiResponsiveness from "./MuiResponsiveness";
import MuiSelect from "./MuiSelect";
import MuiSkeleton from "./MuiSkeleton";
import MuiSnackBar from "./MuiSnackBar";
import MuiSpeedDial from "./MuiSpeedDial";
import MuiSwitch from "./MuiSwitch";
import MuiTable from "./MuiTable";
import MuiTabs from "./MuiTabs";
import MuiTextField from "./MuiTextField";
import { MuiTimeline } from "./MuiTimeline";
import MuiToolTip from "./MuiToolTip";
import MyTypography from "./MyTypography";

const theme = createTheme({
    palette: {
        secondary: {
            main: colors.orange[500],
        }
    }
})

const MaterialUI = () => {
    return (
        <ThemeProvider theme={theme}>
        <Stack m={10}>
            <MyTypography/>
            <MuiButton/>
            <MuiTextField/>
            <MuiSelect/>
            <MuiRadioButton/>
            <MuiCheckBox/>
            <MuiSwitch/>
            <MuiRating/>
            <MuiAutoComplete />
            <MuiLayout/>
            <MuiCard/>
            <MuiAccordion/>
            <MuiImageList/>
            {/* <MuiNavbar /> */}
            <MuiLink/>
            <MuiBreadCrumbs/>
            <MuiDrawer/>
            <MuiSpeedDial/>
            <MuiBottomNavigation/>
            <MuiAvatar/>
            <MuiBadge/>
            <MuiList/>
            <MuiChip/>
            <MuiToolTip/>
            <MuiTable/>
            <MuiAlert/>
            <MuiSnackBar/>
            <MuiDialog/>
            <MuiProgress/>
            <MuiSkeleton/>
            <MuiLoadingButton/>
            <MuiDateRangePicker/>
            <MuiTabs/>
            <MuiTimeline/>
            {/* <MuiMasonry/> */}
            <MuiResponsiveness/>
        </Stack>
        </ThemeProvider>
    );
};

export default MaterialUI;