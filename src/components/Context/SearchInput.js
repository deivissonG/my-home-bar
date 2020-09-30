import React, {createContext, useState} from 'react'

export const SearchInputContext = createContext();

export default function SearchInputContextProvider({children}){
    const [query, setQuery] = useState('');

    return <SearchInputContext.Provider value={{query, setQuery}}>
        {children}
    </SearchInputContext.Provider>
}