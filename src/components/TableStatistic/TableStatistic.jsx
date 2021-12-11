import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import s from './TableStatistic.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: { border: 0 },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          border: 0,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid var(--border-color)',
          boxShadow: '0px 1px 0px var(--shadow-color)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 0,
          outline: 0,
          alignItems: 'center',
          height: 54,
        },
        head: {
          padding: '15px 0px 16px 0px',
          textAlign: 'start',

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
            textAlign: 'end',
          },
          '@media (min-width:768px)': {
            '&:first-of-type': {
              paddingLeft: '30px',
            },
            '&:last-child': {
              paddingRight: '30px',
            },
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
            paddingRight: 0,
          },
          '&:last-child': {
            minWidth: '102px',
            paddingRight: '20px',
            paddingLeft: 0,
          },
          '@media (min-width:768px)': {
            '&:last-child': {
              paddingRight: '30px',
            },
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

const TableStatistic = ({ data, titles }) => {
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
              {data.map(({ id, hex, name, sum }) => (
                <TableRow key={id}>
                  <TableCell
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Box
                      sx={{
                        marginRight: '16px',
                        width: 24,
                        height: 24,
                        backgroundColor: `${hex}`,
                        borderRadius: '2px',
                      }}
                    />
                    {name}
                  </TableCell>
                  <TableCell align="right">{sum}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
};

export default TableStatistic;
