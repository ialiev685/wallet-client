import React from 'react';

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
                <Table key={id}>
                  <TableRow key={id}>
                    {titles.map(({ key, title, type }) => (
                      <>
                        <TableCell variant="head" key={key} type={type}>
                          {title}
                        </TableCell>
                      </>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell>{date}</TableCell>
                    <TableCell>{transactionType ? '+' : '-'}</TableCell>
                    <TableCell>{category}</TableCell>
                    <TableCell>{comment}</TableCell>
                    {!transactionType ? (
                      <TableCell
                        sx={{ color: 'var(--color-pink)', fontWeight: 'bold' }}
                      >
                        {sum}.00
                      </TableCell>
                    ) : (
                      <TableCell
                        sx={{ color: 'var(--color-green)', fontWeight: 'bold' }}
                      >
                        {sum}.00
                      </TableCell>
                    )}
                    <TableCell>{balance}</TableCell>
                  </TableRow>
                </Table>
              </ThemeProvider>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default MobileTable;
