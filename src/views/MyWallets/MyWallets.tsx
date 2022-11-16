import React from 'react';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { walletData, walletDataSelector } from '@src/store/slices/walletDataSlice';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MyWalletsWrapper, AccordionWrapper, WalletsInfo } from './StyledMyWallets';
import AddExpenseForm from '../CreateWallet/AddExpense/AddExpenseForm';

const MyWallets = () => {
    const wallet = useAppSelector(walletDataSelector.getWalletData);
    console.log('wallet', wallet);

    return (
        <MyWalletsWrapper>
            <AccordionWrapper>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Добавить расход</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <AddExpenseForm />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography>Добавить должника</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography>Добавить доход</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography>Создать новый кошелёк</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography>Удалить кошелёк</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography>Изменить категории</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </AccordionWrapper>

            <WalletsInfo>
                {wallet.wallets.map((elem, idx) => {
                    return (
                        <div key={idx}>
                            <p>
                                Название:{' '}
                                <b>
                                    {elem.name} ({elem.currency})
                                </b>
                            </p>
                            <p>Остаток: {elem.sum}</p>
                            <p>Расходы на месяц: 300</p>
                        </div>
                    );
                })}
            </WalletsInfo>
        </MyWalletsWrapper>
    );
};

export default MyWallets;
