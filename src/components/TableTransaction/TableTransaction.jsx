import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { dateFormatter } from '../../helpers/dateFormatter';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import s from './TableTransaction.module.css';

const theme = createTheme({
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--main-font-family)',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 25,
          lineHeight: 1.5,

          color: 'var(--color-black)',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          border: 0,
          fontFamily: 'var(--main-font-family)',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 25,
          lineHeight: 1.5,

          color: 'var(--color-black)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--main-font-family)',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 25,
          lineHeight: 1.5,

          color: 'var(--color-black)',
          '&:not(:last-child)': {
            borderBottom: '1px solid var(--border-color)',
            boxShadow: '0px 1px 0px var(--shadow-color)',
          },
        },
        head: {},
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          alignItems: 'center',
          height: 54,
        },
        head: {
          border: 0,
          padding: '15px 27px 16px 27px',

          fontFamily: 'var(--main-font-family)',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 18,
          lineHeight: 1.5,

          color: 'var(--color-black)',
          background: 'var(--color-white)',

          '&:first-of-type': {
            borderRadius: '30px 0px 0px 30px',
            paddingLeft: '20px',
          },
          '&:last-child': {
            borderRadius: '0px 30px 30px 0px',
            paddingRight: '20px',
          },
          '@media (min-width:1280px)': {
            padding: '15px 29px 16px 28px',
          },
        },
        body: {
          border: 0,
          padding: '0 18px 0 26px',

          fontFamily: 'var(--main-font-family)',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 16,
          lineHeight: 1.5,

          color: 'var(--color-black)',

          '&:first-of-type': {
            paddingLeft: '20px',
            paddingRight: '0px',
          },
          '&:nth-last-of-type(-n+2)': {
            paddingLeft: 0,
            paddingRight: '27px',
          },
          '&:last-child': {
            paddingRight: '20px',
            paddingLeft: 0,
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

const TableTransaction = ({ data, titles }) => {
  return (
    <div className={s.table}>
      <ThemeProvider theme={theme}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {titles.map(({ key, title }) => (
                  <TableCell key={key}>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(
                ({
                  _id,
                  date,
                  transactionType,
                  category,
                  comment,
                  sum,
                  balance,
                }) => {
                  return (
                    <TableRow key={_id}>
                      <TableCell type="date">{dateFormatter(date)}</TableCell>
                      <TableCell align="center">
                        {transactionType ? '+' : '-'}
                      </TableCell>
                      <TableCell>{category}</TableCell>
                      <TableCell>{comment}</TableCell>
                      {!transactionType ? (
                        <TableCell
                          align="right"
                          sx={{
                            color: 'var(--color-pink)',
                            fontWeight: 'bold',
                          }}
                        >
                          {sum}.00
                        </TableCell>
                      ) : (
                        <TableCell
                          align="right"
                          sx={{
                            color: 'var(--color-green)',
                            fontWeight: 'bold',
                          }}
                        >
                          {sum}.00
                        </TableCell>
                      )}

                      <TableCell align="right">{balance}.00</TableCell>
                    </TableRow>
                  );
                },
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
};

export default TableTransaction;
