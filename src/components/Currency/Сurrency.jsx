import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import s from './Сurrency.module.css';
import fetchCurrency from '../../services/currency-api';
import bgDesktop from '../../images/bg-currency/bg-currency-desktop.svg';
import bgTablet from '../../images/bg-currency/bg-currency-tablet.svg';
import bgMobile from '../../images/bg-currency/bg-currency-mobile.svg';

const theme = createTheme({
  components: {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, .3)',
          border: 'none',
          height: 25,
          '&::after': {
            background:
              'linear-gradient(90deg, transparent, rgba(20, 20, 80, 0.5), transparent)',
          },
        },
      },
    },
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
          border: 'none',
          fontFamily: 'Circe, sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#ffffff',
          '@media (min-width:1280px)': {
            //  paddingTop: 20,
            //  paddingBottom: 23,
            padding: '20px 10px 0px',
          },
        },

        head: {
          padding: '11px 0px 12px',
          fontWeight: 700,
          fontSize: 18,
          '@media (min-width:1280px)': {
            padding: '17px 10px 16px',
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

export default function Currency({ className = '' }) {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async () => {
    try {
      setIsLoading(true);
      const data = await fetchCurrency();
      const sliced = data.slice(0, -1);
      setCurrency([...sliced]);
      setIsLoading(false);
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

  const skeletonArray = Array(3).fill('');

  return (
    <>
      <div className={className}>
        {/*className={s.table_wrapper}*/}
        <ThemeProvider theme={theme}>
          <TableContainer>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Валюта</TableCell>
                  <TableCell align="center">Покупка</TableCell>
                  <TableCell align="center">Продажа</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {isLoading ? (
                  skeletonArray.map((_, index) => (
                    <TableRow key={index}>
                      <TableCell component="th">
                        <Skeleton />
                      </TableCell>
                      <TableCell align="right">
                        <Skeleton />
                      </TableCell>
                      <TableCell align="right">
                        <Skeleton />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <>
                    {currency?.map(el => (
                      <TableRow key={el.ccy}>
                        <TableCell align="center" component="th" scope="row">
                          {el.ccy}
                        </TableCell>
                        <TableCell align="center">
                          {(Math.floor(el.buy * 100) / 100).toFixed(2)}
                        </TableCell>
                        <TableCell align="center">
                          {(Math.floor(el.sale * 100) / 100).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </div>
    </>
  );
}
