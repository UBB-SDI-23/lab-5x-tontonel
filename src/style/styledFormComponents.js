import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

export const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: theme.palette.primary.main,
        },
        "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
        },
    margin: theme.spacing(1),
    width: '300px',
    },
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: theme.palette.primary.main,
        },
        "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
        },
    margin: theme.spacing(1),
    width: '300px',
    },
}));
