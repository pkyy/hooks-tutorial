import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect( () => {
        console.log('effect');
        console.log("다음실행");
        return () => {
            console.log('cleanup');
            console.log("먼저실행");
        };
    }, []);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름 : </b> {name}
            </div>
            <div>
                <b>닉네임 : </b> {nickname}
            </div>
        </div>
    );
};

export default Info;