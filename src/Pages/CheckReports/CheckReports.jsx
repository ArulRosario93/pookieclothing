import React, { useState } from "react";
import './CheckReports.css';
import { Dialog, DialogTitle, DialogActions, DialogContent } from "@mui/material";

const CheckReports = ({ show, onClose }) => {

    return (
        <Dialog open={show} maxWidth onClose={onClose} className="CheckReports">

            <DialogTitle>
                <h2 className="CheckReportsHead">Check Reports</h2>
            </DialogTitle>

            <DialogContent>


            </DialogContent>

            <DialogActions>
            
            </DialogActions>

        </Dialog>
    )
}

export default CheckReports;