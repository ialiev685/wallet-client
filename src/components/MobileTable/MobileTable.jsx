import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import s from './MobileTable.module.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: { display: 'grid' },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          display: 'flex',
          height: '46px',
          padding: '0px',
          paddingRight: '20px',

          alignItems: 'center',
          textAlign: 'right',
          justifyContent: 'flex-end',

          fontFamily: 'var(--main-font-family)',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 16,
          lineHeight: 1.5,
          color: 'var(--color-black)',
          border: 0,

          '&:not(:last-child)': {
            borderBottom: '1px solid var(--border-color)',
          },
        },
        head: {
          paddingLeft: '15px',
          justifyContent: 'flex-start',

          fontFamily: 'var(--main-font-family)',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 18,
          lineHeight: 1.5,
          color: 'var(--color-black)',
        },
      },
    },
  },
});
const MobileTable = ({ data, titles }) => {
  return (
    <div>
      <ul className={s.list}>
        {data.map(
          ({ id, date, transactionType, category, comment, sum, balance }) => (
            <li key={id} className={s.card}>
              {!transactionType ? (
                <Box
                  sx={{
                    width: 5,
                    height: 282,
                    background: 'var(--color-pink)',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: 5,
                    height: 282,
                    background: 'var(--color-green)',
                  }}
                />
              )}
              <ThemeProvider theme={theme}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {titles.map(({ key, title, type }) => (
                          <>
                            <TableCell
                              key={`${id}${key}`}
                              variant="head"
                              type={type}
                            >
                              {title}
                            </TableCell>
                          </>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow key={`${id}${date}`}>
                        <TableCell>{date}</TableCell>
                        <TableCell>{transactionType ? '+' : '-'}</TableCell>
                        <TableCell>{category}</TableCell>
                        <TableCell>{comment}</TableCell>
                        {!transactionType ? (
                          <TableCell
                            sx={{
                              color: 'var(--color-pink)',
                              fontWeight: 'bold',
                            }}
                          >
                            {sum}.00
                          </TableCell>
                        ) : (
                          <TableCell
                            sx={{
                              color: 'var(--color-green)',
                              fontWeight: 'bold',
                            }}
                          >
                            {sum}.00
                          </TableCell>
                        )}
                        <TableCell>{balance}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </ThemeProvider>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default MobileTable;
