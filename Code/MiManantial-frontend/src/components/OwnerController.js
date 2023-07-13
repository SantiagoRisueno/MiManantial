import Owner from './Owner'
import {getOwner, deleteOwner,  updateOwner} from '../services/ownerAxios'
import '../css/index.css';
import {Breadcrumbs} from "@mui/material"
import {Link} from "@mui/material"
import {Typography} from "@mui/material"
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import GeneralMenu from './GeneralMenu';
import Cookies from 'universal-cookie'

const cookies = new Cookies();

const OwnerController = () => {
    
    const [owners, setOwner] = useState([])
    
    const deleteRegister = (id) => {
        deleteOwner(id)
    }

    const updateOwnerRegister = (owner) => {
        updateOwner(owner)
    }

    useEffect(() => {
        async function loadOwner() {
            const response = await getOwner()

            if (response.status === 200) {
                setOwner(response.data)
            }
        }

        loadOwner()
        
    }, [])

    useEffect(() => {
        if (typeof cookies.get('username') === 'undefined' ) {
            window.location.href = "./"
        }
    })

    useEffect(() => {
        if (cookies.get('ownerType') === "owner") {
            window.location.href = "./account"
        }
    })

    return (
        <>
            <Box>
                <GeneralMenu />
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6" sx={{ marginLeft:'50px',color: 'white' }}>Owner's Data</Typography>
                </Breadcrumbs> 
                <br/><br/>
                <Owner owners={owners} deleteRegister={deleteRegister} updateOwnerRegister = {updateOwnerRegister}/>
            </Box>
        
        </>
    )
}
export default OwnerController