import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // !!!
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
// import s from './Currency.module.css';
import fetchCurrency from '../../services/currency-api';
import bgDesktop from '../../images/bg-currency/bg-currency-desktop.svg';
import bgTablet from '../../images/bg-currency/bg-currency-tablet.svg';
import bgMobile from '../../images/bg-currency/bg-currency-mobile.svg';

const theme = createTheme({
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          minWidth: 280,
          maxWidth: 348,
          maxHeight: 347,
          minHeight: 174,
          borderRadius: 30,
          backgroundColor: 'rgba(74, 86, 226, 1)',
          boxShadow: '0px 0px 26px -6px rgba(0, 0, 0, 0.25)',
          backgroundImage: `url(${bgTablet})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',

          '@media (min-width:1280px)': {
            width: 348,
            height: 347,
            backgroundImage: `url(${bgDesktop})`,
          },
          //      "@media (min-width:768px) and (max-width:1279px)": {
          //   width: 334,
          //   height: 174,
          // },
          '@media (max-width:767px)': {
            // width: 280,
            // height: 174,
            backgroundImage: `url(${bgMobile})`,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderRadius: '30px 30px 0px 0px',
          background: 'rgba(255, 255, 255, .2)',
          //  paddingBottom: 10,
          // '@media (min-width:1280px)': {
          //   paddingBottom: 20,
          // },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {},
        head: {
          //           paddingBottom: 10,
          // '@media (min-width:1280px)': {
          //   paddingBottom: 20,
          // },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          // paddingTop: 10,
          padding: '10px 0px 10px',
          fontFamily: 'Circe, sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#ffffff',
          '@media (min-width:1280px)': {
            //  paddingTop: 20,
            //  paddingBottom: 23,
            padding: '20px 0px 23px',
          },
        },

        head: {
          padding: '11px, 0px, 12px',
          // paddingTop: 11,
          // paddingBottom: 12,
          fontWeight: 700,
          fontSize: 18,
          '@media (min-width:1280px)': {
            padding: '17px, 0px, 16px',
            // paddingTop: 17,
            // paddingBottom: 16,
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default function Currency() {
  const [currency, setCurrency] = useState([]);
  //   const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      const data = await fetchCurrency();
      const sliced = data.slice(0, -1);
      setCurrency([...sliced]);
      //   setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();

    return () => {
      setCurrency({});
    };
  }, []);

  return (
    <>
      <div>
        {' '}
        {/*className={s.table_wrapper}*/}
        <ThemeProvider theme={theme}>
          <TableContainer>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow sx={{ th: { border: 0, color: '#fff' } }}>
                  <TableCell align="center">Валюта</TableCell>
                  <TableCell align="center">Покупка</TableCell>
                  <TableCell align="center">Продажа</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currency?.map(el => (
                  <TableRow key={el.ccy} sx={{ 'td, th': { border: 0 } }}>
                    <TableCell align="center" component="th" scope="row">
                      {el.ccy}
                    </TableCell>
                    <TableCell align="center">
                      {Math.floor(el.buy * 100) / 100}
                    </TableCell>
                    <TableCell align="center">
                      {Math.floor(el.sale * 100) / 100}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </div>
    </>
  );
}
