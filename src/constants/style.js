import { makeStyles } from '@mui/styles';

export const commonStyle = makeStyles({
      button:{
            display:'flex',
            alignItems:'center',
            outline:'none',
            border:'none',
            cursor:'pointer',
            backgroundColor:'transparent',
            padding:'8px 16px',
            transition:'0.4s',
            fontWeight:'700',
            '&:hover':{
                  opacity:'0.7'
            }
      },
})