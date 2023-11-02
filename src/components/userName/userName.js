import React from 'react'
import { useSelector } from 'react-redux';
import { shortenedText } from '../../utils';

export  const UserName = () => {
    const { user } = useSelector( (state) => state.auth);

    const userName = user?.name || "..."

    return (
        <span style={{color: 'orange'}}>Hi, {shortenedText(userName, 9  )} | </span>
    )
}
