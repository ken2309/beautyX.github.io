import { makeStyles } from "@mui/styles";

export const headerStyle = makeStyles({
      header:{
            width:"100%",
            height:"98px",
            backgroundColor:"var(--bg-gray)",
            borderBottom:'solid 1px #EEEDF2'
      },
      container:{
            height:'100%'
      },
      headerContainer:{
            height:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
      },
      headerBtn:{
            outline:'none',
            padding:'8px 16px',
            borderRadius:'18px',
            cursor:'pointer',
            border:'solid 1px var(--purple)',
            color:'var(--purple)',
            fontSize:'14px',
            lineHeight:'20px',
            fontWeight:'700'
      },
      headerRight:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
      },
      headerRightList:{
            paddingLeft:'0px',
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
      },
      headerAvatar:{
            width:'36px',
            height:'36px',
            borderRadius:'100%'
      },
      headerUserName:{
            fontSize:'14px',
            lineHeight:'20px',
            fontWeight:'700',
            color:'var(--purple)',
            position:'relative'
      },
      headerDotNo:{
            margin:'-15px 0px 0px 24px',
            position:'absolute',
            width:'12px',
            height:'12px',
            backgroundColor:'var(--red-cl)',
            borderRadius:'100%'
      },
      headerRightItem:{
            cursor:'pointer',
            padding:'0px 16px',
            listStyle:'none',
            position: 'relative'
      },
      headerCartCount:{
            position:'absolute',
            backgroundColor:'var(--red-cl)',
            fontSize:'12px',
            lineHeight:'18px',
            fontWeight:'100',
            color:'var(--bg-gray)',
            width:'18px',
            borderRadius:'100%',
            textAlign:'center',
            margin:'-30px 0px 0px 16px'
      },
      // notification
      noBox:{
            zIndex:'2',
            display:'block',
            right: '0',
            // marginTop:'17px',
            width:'440px',
            position:'absolute',
            backgroundColor:'var(--bg-gray)',
            padding:'36px',
            boxShadow:'0px 10px 31px rgba(76, 62, 142, 0.3)',
            borderRadius:'24px',
            flexDirection:'column',
            transition:'all .3s'
      },
      noBoxTitle:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            color:'var(--purple)',
            paddingBottom:'8px',
            borderBottom:'solid 1px var(--purple)'
      },
      noBoxTitleText:{
            fontSize:'20px',
            lineHeight:'27px',
            fontWeight:'700',
      },
      noBoxTitleCheck:{
            display:'flex',
            alignItems:'center',
            fontSize:'14px',
            lineHeight:'20px',
            fontWeight:'500'
      },
      noList:{
            paddingLeft:'0px',
      },
      noItem:{
            listStyle:'none',
            padding:'8px 0px'
      },
      noItemBox:{
            display:'flex',
            alignItems:'center'
      },
      noBoxItemText:{
            paddingLeft:'16px'
      },
      noItemOrg:{
            fontSize:'14px',
            lineHeight:'20px',
            color:'var(--text-black)',
            margin:'0px 0px'
      },
      noItemContent:{
            fontWeight:'500',
            fontSize:'14px',
            lineHeight:'20px',
            color:'var(--text-black)',
            margin:'4px 0px'
      },
      noItemTime:{
            fontWeight:'500',
            fontSize:'11px',
            lineHeight:'12px',
            color:'var(--text-hover)'
      },
      // Menu
      menu:{
            position:'relative'
      },
      menuBox:{
            zIndex:'2',
            right: '0',
            padding:'36px',
            position:'absolute',
            width:'380px',
            backgroundColor:'var(--bg-gray)',
            boxShadow:'0px 10px 31px rgba(76, 62, 142, 0.3)',
            borderRadius:'24px',
            transition:'all .3s'
      },
      menuBoxTitle:{
            fontSize:'20px',
            lineHeight:'24px',
            color:'var(--purple)',
            fontWeight:'700',
            paddingBottom:'8px',
            borderBottom:'solid 1px var(--purple)'
      },
      menuBoxItem:{
            listStyle:'none',
      },
      menuItemContent:{
            padding:'9px 0px',
            display:'flex',
            alignItems:'center'
      },
      menuItemText:{
            marginLeft:'6px',
            fontSize:'14px',
            lineHeight:'20px',
            color:'var(--text-black)',
            fontWeight:'700'
      },
      menuBottom:{
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center'
      },
      menuItemDrop:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
      },
      menuSetting:{
            padding:'8px 0px 8px 44px',
            backgroundColor:'var(--bg-color)',
            borderRadius:'8px'
      },
      menuSettingItem:{
            listStyle:'none',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            fontSize:'14px',
            lineHeight:'20px',
            fontWeight:'500'
      },
      menuLangItem:{
            fontSize: '.875rem',
            letterSpacing: '.2px',
            position: 'relative',
            borderRadius:'18px',
            backgroundColor:'var(--grey)',
            display: 'flex',
            alignItems:'baseline',
            padding: '13px 17px'
      },
      menuLangBtnDropdown:{
            '& span': {
                  marginLeft: '5px',
                  display: 'flex',
                  alignItems:'center'
                },
            position: 'relative',
            boxSizing: 'border-box',
            display: 'flex',
      },
      national:{
            flexBasis: '50%',
            maxWidth: '50%',
            borderRight:'1px solid #d6d6d6',
            padding: '0 0.5rem',
            '& a':{
                  display: 'flex',
                  marginBottom: '0.5rem',
                  fontSize: '1rem',
                  padding: '0.5rem 0',
                  '& span':{
                        paddingLeft: '12px',
                        fontWeight: '500',
                  },
                  '&:nth-child(1)':{
                        marginTop: '0.5rem',
                  }
            },
      },
      curency:{
            flexBasis: '50%',
            maxWidth: '50%',
            padding: '0 0.5rem',
            '& a':{
                  display: 'flex',
                  marginBottom: '0.5rem',
                  fontSize: '1rem',
                  padding: '0.5rem 0',
                  paddingRight: '0.5rem',
                  '& span':{
                        paddingLeft: '12px',
                        fontWeight: '500',
                  },
                  '&:nth-child(1)':{
                        marginTop: '0.5rem',
                  },
                  "&:after":{
                        right:'-0.5rem !important',
                  }
            },
            
      },
      popover:{
            border: '1px solid #d6d6d6',
            boxShadow: '0px 10px 31px rgb(76 62 142 / 30%)',
            borderRadius: '1rem',
            padding: '0.5rem 1rem',
            top: '5rem',
            right: 0,
            textAlign: 'left',
            opacity: 0,
            visibility: 'hidden',
            transition: 'all .3s',
            zIndex: 2,
            position:'absolute',
            display: 'flex',
            flexDirection: 'row',
            width: '485px',
            background: 'var(--bg-gray)',
            "&::before": {
                  content: '""',
                  top: '-20px',
                  right: '2rem',
                  height: 0,
                  width:  0,
                  border:'10px solid transparent',
                  borderBottomColor: 'var(--bg-gray)',
                  borderTopLeftRadius: '3px',
                  position: 'absolute',
                  
            },
            "& div":{
                  "& a":{
                        transition: 'all .3s',
                        position: 'relative',
                        alignItems: 'center',
                        "&:hover":{
                              color:"var(--purple)"
                        },
                        "&:after":{
                              content: '""',
                              position: 'absolute',
                              display: 'block',
                              opacity: '0',
                              visibility: 'hidden',
                              right: '0',
                              width: '5px',
                              height:"8px",
                              border:'solid #222',
                              borderWidth:"0 2px 2px 0",
                              transform:'rotate(45deg)',
                              transition: 'all .3s'
                        }
                  },
                  active:{
                        "&:after":{
                              opacity: '1',
                              visibility: 'visible'
                        }
                  }
            }
      },
      popoverOpened:{
            top: '3.7rem',
            opacity: '1',
            visibility: 'visible'
      }
})
