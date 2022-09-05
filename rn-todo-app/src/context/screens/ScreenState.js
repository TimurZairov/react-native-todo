import React from "react";
import {ScreenContext} from './screenContext'

export const ScreenState = ({children}) => {

    const initialState = {
        screen: null
    }

    return (
        <ScreenContext.Provider value={{initialState}}>
            {children}
        </ScreenContext.Provider>
    )
}