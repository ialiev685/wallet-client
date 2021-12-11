import React, { useState, useEffect } from 'react';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import s from './MobileTable.module.css';
import { dateFormatter } from '../../helpers/dateFormatter';

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

const MobileTable = ({
  data,
  className = '',
  onPage,
  numberPage,
  totalPages,
}) => {
  const [isFetching, setIsFetching] = useState(false);

  const [tables, setTables] = useState(() => data || []);

  useEffect(() => {
    if (isFetching) {
      setIsFetching(false);

      onPage(numberPage + 1);
      setTables(prevTables => [...prevTables, ...data]);
    }
  }, [data, isFetching, numberPage, onPage]);

  const handleScroll = e => {
    const heightScroll = e.target.scrollHeight;
    const distanceToTop = e.target.scrollTop;
    const heghtView = e.target.clientHeight;

    if (
      heightScroll - (distanceToTop + heghtView) < 50 &&
      numberPage < totalPages
    ) {
      setIsFetching(true);
    }
  };

  return (
    <div onScroll={handleScroll} className={className}>
      <ul className={s.list}>
        {/* {data.map( */}
        {tables.map(
          (
            { _id: id, date, transactionType, category, comment, sum, balance },
            index,
          ) => (
            <li key={index} className={s.card}>
              {transactionType ? (
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
                      <TableRow variant="head">
                        <TableCell type="date">Дата</TableCell>
                        <TableCell type="boolean">Тип</TableCell>
                        <TableCell>Категория</TableCell>
                        <TableCell>Комментарий</TableCell>
                        <TableCell type="number">Сумма</TableCell>
                        <TableCell type="number">Баланс</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow key={`${id}${date}`}>
                        <TableCell>{dateFormatter(date)}</TableCell>
                        <TableCell>{transactionType ? '-' : '+'}</TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>{comment}</TableCell>
                        {transactionType ? (
                          <TableCell
                            sx={{
                              color: 'var(--color-pink)',
                              fontWeight: 'bold',
                            }}
                          >
                            {sum}
                          </TableCell>
                        ) : (
                          <TableCell
                            sx={{
                              color: 'var(--color-green)',
                              fontWeight: 'bold',
                            }}
                          >
                            {sum}
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
