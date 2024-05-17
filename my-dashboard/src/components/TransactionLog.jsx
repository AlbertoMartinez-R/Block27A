import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockTransactions } from "../mockData";

export default function TransactionsLogs() {
    const columns = [
        { field: 'txId', HeaderName: 'Transaction ID', width: 150 },
        { field: 'user', HeaderName: 'User', width: 150 },
        { field: 'date', HeaderName: 'Date', width: 150 },
        { field: 'cost', HeaderName: 'Cost', width: 150 },
    ]

    return (
        <div style={{
            height: '400',
            width: "100%"
        }}>
            <DataGrid
                rows={mockTransactions}
                columns={columns}
                pageSize={5}
                getRowId={(row) => row.txId}
            />
        </div>
    );
};