import React, {useState, useEffect} from 'react'
import * as S from './styles'

export function Loading(){

    const [open, setOpen] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
          setOpen(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

    return(
        open &&
        <S.PageWrapper>
            <img src={require('../../assets/white-logo.png')} alt="logo"/>
        </S.PageWrapper> 
    )
}

export default Loading